import { Inter } from "next/font/google";
import '@/app/globals.css'
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Portfolio",
  description: "Developed By Diwakar Giri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
