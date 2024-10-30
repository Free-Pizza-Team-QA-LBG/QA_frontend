import Link from 'next/link';

const NavBar = () => {
    return (
      <nav className="sticky top-0 z-50 bg-gray-900 text-white p-4 shadow-md flex items-center justify-center w-full">
        <Link className="text-2xl font-bold" href="/">Free Pizza Team</Link>
      </nav>
    );
  };
  
  export default NavBar;
  