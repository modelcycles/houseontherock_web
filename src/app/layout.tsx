import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./css/globals.css";
import "./css/customScrollBar.css";
import { HouseHeader } from "./_components/HouseHeader";
import { HouseFooter } from "./_components/HouseFooter";
import { MediaQueryProvider } from "./_components/MediaQueryContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "House On The Rock Press",
  description: "Photo book publisher for God",
  icons: { icon: "/apple-touch-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="title" content="House On The Rock - Photobook Publisher" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="사진 책으로 빛을 전하는 출판사 하우스온더락입니다."
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="keywords"
          content="Photobook, Independent Publisher, 사진책, 독립출판사"
        />
        <meta name="theme-color" content="#dfd3c3" />
        <meta
          name="google-site-verification"
          content="FojmBkNyAdne9uZ3x3mpQjEqnhsKCwBi0uD2coAKEAs"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <MediaQueryProvider>
            <HouseHeader />
            {children}
            <HouseFooter />
          </MediaQueryProvider>
        </div>
      </body>
    </html>
  );
}
