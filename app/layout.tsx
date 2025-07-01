import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Join Up",
  description: "Join Up - Your Gateway to Unforgettable Travel Experiences",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
