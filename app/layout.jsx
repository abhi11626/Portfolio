import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "@/components/footer";
import { MenuProvider } from "@/context/menuContext";
import BlurWrapper from "@/UI/BlurWrapper";

// export const metadata = {
//   title: "Abhishek Gupta | Frontend Engineer",
//   description: "Portfolio",
//   icons: {
//     icon: "/icon.png",
//   },
// };

export const metadata = {
  title: "Abhishek Gupta | Frontend Engineer",
  description:
    "I build responsive, accessible and exceptional web experiences with modern technologies.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Abhishek Gupta | Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, and TypeScript.",
    url: "https://portfolio-navy-theta-92.vercel.app",
    siteName: "Abhishek Gupta Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhishek Gupta Portfolio Card",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <MenuProvider>
          <Navbar />
          <BlurWrapper>
            <div className="pt-20">{children}</div>
            <Footer />
          </BlurWrapper>
        </MenuProvider>
      </body>
    </html>
  );
}
