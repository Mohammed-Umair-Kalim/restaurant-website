import React from "react";
import Image from "next/image";

import clockIcon from "../../public/png & svg/clock-clockwise.png";
import RecentPost from "@/components/recentPost";

const Contact = () => {
  return (
    <div className="bg-[#0D0D0D] shadow md:px-10 px-5 py-10 rounded-sm w-full md:m-0 ">
      
      <div className="flex md:flex-row flex-col justify-between md:items-center">
          
       <div className="">
       <h2 className="text-[#FF9F0d] font-bold text-lg  ">
          St<span className="text-white">ill You Need Our Support ?</span>
        </h2>
        <p> Dont wait make a smart and logical quote here. Its pretty easy.</p>
       </div>
        
        <div className="bg-white w-[296px] h-[55.86px] flex justify-between  ">

          <input
            placeholder="Enter Your Email"
            className=" bg-[#FF9F0d] "
          />

          <button className="text-[#FF9F0d]  bg-white w-[163px]">
            SUBSCRIBE Now
          </button>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between  border-t-2 border-[#FF9F0d] shadow-lg md:h-[250px] h-full w-full my-10">
        <div className="w-[300px] md:w-[350px] md:text-sm text-[#FFFFFF] pt-10">
          <h1 className="text-[#FFFFFF] text-3xl font-bold  py-2">About us</h1>
          <p className="py-1">
            corporate client and leisure travelers has been releying on Groundlink
            for dependeb safe,and professional chauffeured car service in major
            cities across world.

          </p>

          <div className="flex items-center space-x-1">
  {/* Clock Icon with Orange Background */}
  <div className="bg-[#FF9F0D] flex items-center justify-center p-1 rounded">
    <Image
      src={clockIcon}
      alt="Clock Icon"
      width={78}
      height={72}
      className="inline-block"
    />
  </div>

  {/* Time and Day Information */}
  <div className="bg-[#0D0D0D]  text-white p-4 rounded">
    <p>
      Opening Hours <br />
      Mon-Sat (8.00-6.00) <br />
      Sunday - Closed
    </p>
  </div>
</div>
        </div>
        <div className=" text-[#FFFFFF] md:text-sm pt-10">
          <h1 className="text-xl md:text-sm font-semibold text-white">
            Usefull Links
          </h1>
          <p className="rounded-sm  w-10 "></p>
          <p className="py-1.5 hover:text-[#FF9F0D] cursor-pointer">About us</p>
          <p className="py-1.5 hover:text-[#FF9F0D] cursor-pointer">News</p>
          <p className="py-1.5 hover:text-[#FF9F0D] cursor-pointer">Partners</p>
          <p className="py-1.5 hover:text-[#FF9F0D] cursor-pointer">Team </p>
          <p className="py-1.5 hover:text-[#FF9F0D] cursor-pointer">Menu </p>
          <p className="py-1.5 hover:text-[#FF9F0D] cursor-pointer">Contact </p>
        </div>
        <div className=" text-[#FFFFFF] md:text-sm pt-10">
          <h1 className="text-xl md:text-sm font-semibold text-white">
            Help?
          </h1>
          <p className=" rounded-sm  w-10 "></p>
          <p className="pt-5 hover:text-[#FF9F0D] cursor-pointer">FAQ</p>
          <p className="py-1.5 hover:text-[#FF9F0D] cursor-pointer">Term & Condition </p>
          <p className="py-1.5 hover:text-[#FF9F0D] cursor-pointer"> Reporting </p>
          <p className="py-1.5 hover:text-[#FF9F0D] cursor-pointer">Documentation</p>
          <p className="py-1.5 hover:text-[#FF9F0D] cursor-pointer">Support Policy</p>
          <p className="py-1.5 hover:text-[#FF9F0D] cursor-pointer">Privacy</p>
        </div>
        <RecentPost/>
      </div>
    </div>
    
  );
};

export default Contact;
