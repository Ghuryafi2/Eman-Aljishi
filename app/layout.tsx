import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Eman Aljishi",
  description: "Created with ",
  generator: "v0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">{children}</main>
        <Footer></Footer>
        </body>
    </html>
  );
}
