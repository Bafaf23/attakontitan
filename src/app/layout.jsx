import "@/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Header from "@/components/organism/Header";
import Footer from "@/components/organism/Footer";

export const metadata = {
  title: "AttackonTitan",
  description: "Conoce un poco mas a los persoanjes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex grow flex-col bg-gray-100">{children}</main>
        </div>
      </body>
    </html>
  );
}
