import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import '@/components/assets/style.css'
import '@/components/assets/font.css'
import Header from "@/components/Header/page"
import Footer from "@/components/Footer/page"
import ScrollAnimation from "@/components/utlis/ScrollAnimation";

export const metadata = {
  title: "BuyNest-The Leading E-Commerce Platform",
  description: "BuyNest is a leading e-commerce platform that provides a seamless and convenient shopping experience for customers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollAnimation />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
