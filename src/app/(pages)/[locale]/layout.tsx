import Footer from "@/src/components/Footer";
import Navigation from "@/src/components/Navigation";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body
          className={`${pretendard.variable} font-pretendard font-regular max-w-screen-xl mx-auto relative`}
        >
          <div>
            <Navigation />
            <main className="xl:ml-[33%] xl:w-2/3 px-4 mt-12 xl:mt-0 mb-40">
              {children}
            </main>
          </div>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
