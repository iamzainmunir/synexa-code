import type { Metadata } from "next";
import "./globals.css";
import { urbanist } from "../../public/fonts/font";
import { ThemeProvider } from "@/components/theme-provider";
// import { HeroHeader } from "@/components/header";
import ChatBot from "@/components/chatbot";

export const metadata: Metadata = {
  title: "Syenxa Technologies",
  description:
    ` At SyenxaTech, we deliver smart, scalable, and high-performance AI
      solutions designed to streamline your business operations...`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`antialiased ${urbanist.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ChatBot />
          {/* <HeroHeader /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
