import type { Metadata, Viewport } from "next";

//I18n
import { useServerTranslation } from "@/hooks/translation";
import { cookies } from "next/headers";

//Assets
import "@/assets/css/globals.css";

//Components
import { ClientProvider } from "@/components/providers/ClientProvider";

//Fonts
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

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
  await useServerTranslation(language);

  return (
    <html lang={'en'} dir={'ltr'}>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
