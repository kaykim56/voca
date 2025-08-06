import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rain VOCA - 영단어 타이핑 게임",
  description: "비 내리듯 떨어지는 영단어를 타이핑하는 재미있는 게임! 5단계 난이도로 초보자부터 전문가까지 즐길 수 있습니다.",
  keywords: "영단어, 타이핑 게임, 영어 학습, 교육 게임, 무료 게임, VOCA, 단어 암기",
  authors: [{ name: "Kay Kim" }],
  creator: "Kay Kim",
  publisher: "Rain VOCA",
  robots: "index, follow",
  openGraph: {
    title: "Rain VOCA - 영단어 타이핑 게임",
    description: "비 내리듯 떨어지는 영단어를 타이핑하는 재미있는 게임!",
    url: "https://voca-h68sqqfr1-kaykim56s-projects.vercel.app",
    siteName: "Rain VOCA",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rain VOCA - 영단어 타이핑 게임",
    description: "비 내리듯 떨어지는 영단어를 타이핑하는 재미있는 게임!",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4337637294815525"
          crossOrigin="anonymous"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
