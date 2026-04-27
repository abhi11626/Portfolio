import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "@/components/footer";

export const metadata = {
  title: "Abhishek Gupta | Frontend Engineer",
  description: "Portfolio",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />

        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
