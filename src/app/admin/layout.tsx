import type { Metadata, Viewport } from "next";

//Next
export const metadata: Metadata = {
  title: "Amiran Group | Admin",
  description: "Developed by alimor.ir",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
