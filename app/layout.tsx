import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "daask-build-donegal.dermott-mull-7137.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const image = `${origin}/og.png`;
  return {
    metadataBase: new URL(origin),
    title: { default: "DAASK Build Ltd | Building Contractor Donegal", template: "%s" },
    description: "Construction, renovation, energy systems and project management backed by 25 years of experience.",
    icons: { icon: "/daask-logo.png", shortcut: "/daask-logo.png" },
    openGraph: {
      title: "DAASK Build Ltd",
      description: "Where engineering meets craftsmanship. Registered building contractor in Donegal.",
      type: "website",
      url: origin,
      images: [{ url: image, width: 1536, height: 1024, alt: "DAASK Build Ltd — Where Engineering Meets Craftsmanship" }],
    },
    twitter: { card: "summary_large_image", title: "DAASK Build Ltd", description: "Where engineering meets craftsmanship.", images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
