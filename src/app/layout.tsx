import type { Metadata } from "next";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Prismic with NextJS experiment",
  description: "NextJS app with Prismic CMS integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
