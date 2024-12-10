import React from "react";

import Link from "next/link";
import Searchbar from "@/components/searchbar";
import Header from "@/components/header";

const NavBar = () => {
  return <div className=" ">

      {/* NavBar */}

      <nav className="flex justify-between max-w-7xl mx-auto px-4 py-4">
        
      <div>
          <ul className="hidden md:block">
            <li className="flex gap-5 text-[16px] mt-10 ">
              <Link href="/" className="hover:text-[#FF9F0D]">Home</Link>
              <Link href="/menu" className="hover:text-[#FF9F0D]">Menu</Link>
              <Link href="/blog" className="hover:text-[#FF9F0D]">Blog</Link>
              <Link href="/page" className="hover:text-[#FF9F0D]">Page</Link>
              <Link href="/about" className="hover:text-[#FF9F0D]">About</Link>
              <Link href="/shop" className="hover:text-[#FF9F0D]">Shop</Link>
              <Link href="/contact" className="hover:text-[#FF9F0D]">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className=" text-[24px] text-[#FF9F0D] mr-[100px]">
            Food<span className="text-white">tuck</span>
          </h1>
        </div>

        {/* SearchBar */}
        <Searchbar />
      </nav>

      {/* Header */}
      <Header/>
</div>
      
  
};

export default NavBar;
