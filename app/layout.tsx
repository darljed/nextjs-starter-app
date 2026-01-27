import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Link from "next/link";
import { AuthProvider } from "@/providers/AuthProvider";
import NavBar from "@/components/NavBar";

const montserrat = Montserrat({ weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "NextJS Starter App",
  description: "Boiler template for easy jumpstart of an app",
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
          <NavBar />
          <Toaster richColors position="top-right" />
            {children}
        </body>
      </AuthProvider>
    </html>
  );
}
