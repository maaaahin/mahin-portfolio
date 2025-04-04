import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";

//Components
import Header from "../components/header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
});


export const metadata = {
  title: "Mahin's Portfolio",
  description: "Tech-Driven. Innovation-Focused.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition>
          {children}
        </PageTransition>
        
      </body>
    </html>
  );
}
