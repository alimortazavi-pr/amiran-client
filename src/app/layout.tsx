import type { Metadata, Viewport } from "next";

//I18n
import { useServerTranslation } from "@/hooks/translation";
import { cookies } from "next/headers";

//Assets
import "@/assets/css/globals.css";

//Components
import { ClientProvider } from "@/components/providers/ClientProvider";

//Fonts
// Supports weights 100-900
import "@fontsource-variable/noto-sans-arabic";

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
    <html lang={language} dir={language !== "en" ? "rtl" : "ltr"}>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
