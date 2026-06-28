import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeNoFlashScript } from "@/providers/ThemeProvider";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import PageTransition from "@/components/layout/PageTransition";
import ClientEffects from "@/components/layout/ClientEffects";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import DotGridGate from "@/components/reactbits/backgrounds/DotGridGate";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.roles[0]}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.summary,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.summary,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(display.variable, body.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeNoFlashScript }}
        />
      </head>

      <body>
        <ThemeProvider>
          <Loader />
          <ClientEffects />

          {/* Global Dot Field Background */}
          <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
  <DotGridGate />
</div>

          <SmoothScroll>
            <Navbar />

            <main>
              <PageTransition>{children}</PageTransition>
            </main>

            <Footer />
          </SmoothScroll>
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}