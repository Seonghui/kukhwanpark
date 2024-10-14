import Footer from "@/src/components/Footer";
import Navigation from "@/src/components/Navigation";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

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
        <body>
          <div className="flex">
            <div className="w-1/3 p-5">
              <header className="flex justify-between *:text-2xl">
                <div>Kukhwan Park</div>
                <div>2017~2024</div>
              </header>
              <nav className="pt-20">
                <Navigation />
              </nav>
              <footer className="fixed bottom-10">
                <Footer />
              </footer>
            </div>
            <main className="w-2/3">{children}</main>
          </div>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
