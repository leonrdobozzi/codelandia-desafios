import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.scss";

import OrderSummary from "@/components/OrderSummary";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codepay",
  description: "Uma plataforma de pagamento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <Header />
        <div className="container content main">
          <div className="checker-container">{children}</div>
          <OrderSummary />
        </div>
      </body>
    </html>
  );
}
