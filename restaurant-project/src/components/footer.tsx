import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaPinterest, FaTwitter } from "react-icons/fa6";
import Contact from "@/components/contact";

const Footer = () => {
  return (
    <div className="m-0">
        <Contact/>
      <div className="bg-[#FF9F0D] text-[#ffffff] flex justify-between md:mt-1 md:m-0 py-10 mt-1">
       <p className="w-[384px] h-[24px] top-[8417px] ml-24">Copyright &#169; 2024 by UMAIR.All Right Resereved.</p>
        
        <div className="flex mr-24">
          <FaFacebookF className="bg-white text-black w-[35.85px] h-[33px] hover:text-[#FF9F0D] cursor-pointer" />
          <p className="text-xl font-semibold pl-2"></p>
        
        
          <FaTwitter className="bg-white text-black w-[35.85px] h-[33px] hover:text-[#FF9F0D] cursor-pointer" />
          <p className="text-xl font-semibold pl-2"></p>
        
        
          <FaInstagram className="bg-white text-black w-[35.85px] h-[33px] hover:text-[#FF9F0D] cursor-pointer " />
          <p className="text-xl font-semibold pl-2">
          </p>
        
        
          <FaYoutube className="w-[35.85px] h-[33px]  text-[#FFFFFF] hover:text-[#ff0d0d] cursor-pointer" />
          <p className="text-xl font-bold pl-2"></p>
        
        
          <FaPinterest className="bg-white text-black w-[35px] h-[33px] hover:text-[#FF9F0D] cursor-pointer" />
          <p className="text-lg font-semibold pl-2"></p>
        </div>
        
      </div>
      
    </div>
  );
};

export default Footer;
