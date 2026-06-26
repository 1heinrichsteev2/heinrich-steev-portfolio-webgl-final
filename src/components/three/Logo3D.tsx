"use client";
import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree, invalidate } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, Center, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { MeshoptDecoder } from "meshoptimizer";
import * as THREE from "three";
import { useThemeColors } from "@/hooks/useThemeColors";
import { useInView } from "@/hooks/useInView";
import { getCapability } from "@/lib/device-capability";

const MODELS = ["/models/logo-1.glb", "/models/logo-2.glb", "/models/logo-3.glb"];

function Model({ url, glow, rotate }: { url: string; glow: string; rotate: boolean }) {
  const { scene } = useGLTF(url, undefined, undefined, (loader) => {
    (loader as any).setMeshoptDecoder?.(MeshoptDecoder);
  });
  const ref = useRef<THREE.Group>(null);
  useEffect(() => {
    const c = new THREE.Color(glow);
    scene.traverse((o: any) => {
      if (o.isMesh && o.material) {
        const m = o.material as THREE.MeshStandardMaterial;
        if ("emissive" in m) { m.emissive = c.clone().multiplyScalar(0.12); m.emissiveIntensity = 0.6; }
        m.envMapIntensity = 1.1; m.needsUpdate = true;
      }
    });
    invalidate(); // re-render once after material change (demand mode)
  }, [scene, glow]);
  // auto-rotate drives frames only while visible; invalidate keeps demand loop alive
  useFrame((_, dt) => { if (rotate && ref.current) { ref.current.rotation.y += dt * 0.18; invalidate(); } });
  return <group ref={ref}><Center><primitive object={scene} /></Center></group>;
}

function Lights({ ambient, glow }: { ambient: string; glow: string }) {
  return (<>
    <ambientLight intensity={0.5} color={ambient} />
    <directionalLight position={[5, 6, 4]} intensity={1.4} color={glow} />
    <pointLight position={[-6, -2, -4]} intensity={0.8} color={ambient} />
  </>);
}

function CursorDrag() {
  const { gl } = useThree();
  useEffect(() => {
    const el = gl.domElement;
    const down = () => (el.style.cursor = "grabbing");
    const up = () => (el.style.cursor = "grab");
    el.style.cursor = "grab";
    el.addEventListener("pointerdown", down); window.addEventListener("pointerup", up);
    return () => { el.removeEventListener("pointerdown", down); window.removeEventListener("pointerup", up); };
  }, [gl]);
  return null;
}

export default function Logo3D({ modelIndex = 0 }: { modelIndex?: number }) {
  const colors = useThemeColors();
  const [idx, setIdx] = useState(modelIndex);
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: "0px", threshold: 0.05 });
  const cap = typeof window !== "undefined" ? getCapability() : null;
  const isAurora = typeof document !== "undefined" &&
    document.documentElement.getAttribute("data-theme") === "aurora-noir";
  const autoRotate = inView && (cap ? cap.tier !== "low" : true);

  // invalidate only when actual theme color values or model index change (not on every render)
  useEffect(() => { invalidate(); }, [colors.glow, colors.ambient, idx]);

  return (
    <div ref={ref} className="relative h-[420px] w-full sm:h-[520px]">
      <Canvas
        frameloop={inView ? "demand" : "never"}  /* STOP rendering entirely when off-screen */
        dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 40 }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <Suspense fallback={null}>
          <Lights ambient={colors.ambient} glow={colors.glow} />
          <Model url={MODELS[idx]} glow={colors.glow} rotate={autoRotate} />
          {/* Inline environment lighting — no external HDR fetch (the CDN HDR was
              CORS-blocked and crashed the whole page). Visual look preserved by the
              existing Lights + a neutral env created in-memory. */}
          <Environment resolution={64} background={false}>
            <mesh scale={100}>
              <sphereGeometry args={[1, 32, 32]} />
              <meshBasicMaterial color={colors.ambient} side={THREE.BackSide} />
            </mesh>
          </Environment>
          <ContactShadows position={[0, -1.6, 0]} opacity={0.35} scale={8} blur={2.6} far={3} color={colors.ambient} />
          {cap?.tier !== "low" && (
            <EffectComposer>
              <Bloom intensity={isAurora ? 0.7 : 0.45} luminanceThreshold={0.55} luminanceSmoothing={0.9} mipmapBlur />
            </EffectComposer>
          )}
          <CursorDrag />
          <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.06}
            rotateSpeed={0.7} minPolarAngle={0} maxPolarAngle={Math.PI} onChange={() => invalidate()} />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {MODELS.map((_, i) => (
          <button key={i} aria-label={`Logo variant ${i + 1}`} onClick={() => { setIdx(i); invalidate(); }}
            className={`h-2.5 w-2.5 rounded-full transition-all ${i === idx ? "scale-125" : "opacity-40"}`}
            style={{ background: "var(--accent)" }} />
        ))}
      </div>
    </div>
  );
}
useGLTF.preload(MODELS[0]);
