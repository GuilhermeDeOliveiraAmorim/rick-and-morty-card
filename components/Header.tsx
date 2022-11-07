import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt=""
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <FaSearch className="hidden h-6 w-6 sm:inline text-white" />
        <p className="hidden lg:inline text-white">Kids</p>
        <FaBell className="h-6 w-6 text-white" />
        <Link href="/account">
          <img
            className="cursor-pointer rounded h-8 w-8"
            src="https://preview.redd.it/ty54wbejild91.jpg?auto=webp&s=218374d88a7a4185ad968e1150261e13da2ed1a2"
            alt=""
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
