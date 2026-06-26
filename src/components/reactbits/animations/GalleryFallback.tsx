import Image from "next/image";
export default function GalleryFallback({ items }: { items: { slug: string; title: string; blur?: string }[] }) {
  return (
    <div className="flex h-full snap-x gap-4 overflow-x-auto pb-4">
      {items.map((it) => (
        <div key={it.slug} className="relative aspect-[4/5] w-[260px] flex-none snap-center overflow-hidden rounded-lg border border-line">
          <Image src={`/portfolio/${it.slug}-1080.webp`} alt={it.title} fill sizes="260px"
            placeholder={it.blur ? "blur" : undefined} blurDataURL={it.blur} className="object-cover" />
        </div>
      ))}
    </div>
  );
}
