import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Employee App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full min-w-screen bg-gray-100">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
