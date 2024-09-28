import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Sunny Go",
  description: "Chatting App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
