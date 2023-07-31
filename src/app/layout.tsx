import { HeaderComponent } from "@/components/app/Headers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALS 54 - ",
  description: "Generated by create next app",
  icons: "/images/logos/icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* HEADER COMPONENT FOR ALL APP */}
        <HeaderComponent />
        {/* COMPONENTS CHILDREN  */}
        {children}
      </body>
    </html>
  );
}
