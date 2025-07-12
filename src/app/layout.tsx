import type { Metadata, Viewport } from "next";

//I18n
import { useServerTranslation } from "@/hooks/translation";
import { cookies } from "next/headers";

//Assets
import "@/assets/css/globals.css";

//Components
import { ClientProvider } from "@/components/providers/ClientProvider";

//Fonts
import localFont from "next/font/local";
const morabba = localFont({
  src: [
    {
      path: "./../assets/fonts/Morabba/Morabba-UltraLight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "./../assets/fonts/Morabba/Morabba-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../assets/fonts/Morabba/Morabba-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../assets/fonts/Morabba/Morabba-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../assets/fonts/Morabba/Morabba-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./../assets/fonts/Morabba/Morabba-Black.woff",
      weight: "850",
      style: "normal",
    },
    {
      path: "./../assets/fonts/Morabba/Morabba-Heavy.woff",
      weight: "900",
      style: "normal",
    },
  ],
});

//Next
export const metadata: Metadata = {
  title: "Amiran Group",
  description: "Developed by alimor.ir",
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
    <html
      lang={language}
      dir={language !== "en" ? "rtl" : "ltr"}
      className={morabba.className}
    >
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
