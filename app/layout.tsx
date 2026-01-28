import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Link from "next/link";
import { AuthProvider } from "@/providers/AuthProvider";
import NavBar from "@/components/NavBar";
import SearchParamAccessor from "@/components/SearchParamAccessor";

const montserrat = Montserrat({ weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Next.js Starter App",
  description: "A modern full-stack boilerplate with authentication, database, and UI components ready to go.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider >
        <body
          className={`${montserrat} antialiased`}
        >
          <SearchParamAccessor />
          <NavBar />
          <Toaster richColors position="top-right" />
            {children}
        </body>
      </AuthProvider>
    </html>
  );
}
