import "./globals.css";

export const metadata = {
  title: "Employee App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen min-w-screen bg-gray-100">
        {children}
      </body>
    </html>
  );
}
