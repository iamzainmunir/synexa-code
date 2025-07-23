import type { Metadata } from "next";
import "./globals.css";
import { urbanist } from "../../public/fonts/font";
import { ThemeProvider } from "@/components/theme-provider";
// import { HeroHeader } from "@/components/header";
import ChatBot from "@/components/chatbot";

export const metadata: Metadata = {
  title: "Syenxa Technologies",
  description:
    "Mind Changer HSE Consultancy provides internationally accredited HSE training, safety audits, and certifications across Pakistan, Saudi Arabia, and Tanzania.",
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
