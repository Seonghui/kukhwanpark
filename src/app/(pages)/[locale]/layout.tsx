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
        <body className={`${pretendard.variable} font-pretendard font-regular`}>
          <div className="flex">
            <div className="fixed top-0 left-0 bottom-0 p-5 w-1/3">
              <header className="flex justify-between *:text-xl">
                <div>Kukhwan Park</div>
                <div>2017~2024</div>
              </header>
              <nav className="pt-12">
                <Navigation />
              </nav>
              <footer className="fixed bottom-10">
                <Footer />
              </footer>
            </div>
            <main className="ml-[33%] w-2/3 px-4">{children}</main>
          </div>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
