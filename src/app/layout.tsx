import type { Metadata, Viewport } from "next";

//I18n
import { useServerTranslation } from "@/hooks/translation";
import { cookies } from "next/headers";

//Assets
import "@/assets/css/globals.css";
import "react-medium-image-zoom/dist/styles.css";
import 'swiper/css';

//Components
import { ClientProvider } from "@/components/providers/ClientProvider";

//Next
export const metadata: Metadata = {
  title: "Amiran Group | گروه ساختمانی امیران",
  description: "Developed by alimor.ir",
  keywords: [
    "امیران",
    "شرکت امیران",
    "گروه امیران",
    "شرکت ساختمانی",
    "شرکت ساختمانی امیران",
    "گروه ساختمانی امیران",
    "شرکت امیران ایران",
    "شرکت امیران گروه",
    "ساخت و ساز",
    "Amiran Group",
    "alimor.ir",
    "Amiran",
    "Amiran Group Iran",
    "Amiran Group Company",
    "Amiran Group Official",
    "Amiran Group Iran Official",
  ],
  openGraph: {
    title: "شرکت ساختمانی امیران | گروه ساختمانی امیران",
    description:
      "شرکت ساختمانی امیران با بیش از 20 سال تجربه در صنعت ساخت و ساز، ارائه دهنده خدمات ساختمانی با کیفیت بالا در ایران است.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //i18n
  const language = (await cookies()).get("language")?.value || "en";
  // eslint-disable-next-line react-hooks/rules-of-hooks
  await useServerTranslation(language);

  return (
    <html lang={language} dir={language !== "en" ? "rtl" : "ltr"}>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
