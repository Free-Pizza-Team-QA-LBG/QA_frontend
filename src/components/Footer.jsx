import Link from 'next/link'; // Import Link from next/link

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-2xl mb-4 text-primary">StellarWear</h3>
          <p className="text-sm text-gray-400">
            The website .... 
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="text-sm hover:underline text-gray-300">Home</Link></li>
            <li><Link href="/about" className="text-sm hover:underline text-gray-300">About Us</Link></li>
            <li><Link href="/contact" className="text-sm hover:underline text-gray-300">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto text-center text-sm mt-8 border-t border-gray-700 pt-4">
        <div className="mb-2">
          © 2024 Free Pizza Team.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
