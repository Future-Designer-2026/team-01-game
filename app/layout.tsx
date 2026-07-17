import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "情绪森林｜儿童情绪管理游戏",
  description: "为4至6岁儿童设计的中文情绪管理互动游戏。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
