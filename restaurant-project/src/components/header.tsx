import React from "react";
import Image from "next/image";

import eggPlate from "../../public/images/p1.png";
import line from "../../public/png & svg/line-vertical w.png";
import facebook from "../../public/png & svg/f.png";
import twitter from "../../public/png & svg/t.png";
import pineterest from "../../public/png & svg/p.png";

const Header = () => {
  return (
<div className="flex justify-between">

    <div >
      <Image src={line} alt="line" className="w-[20px] h-[200px] mt-5" />
      <Image src={facebook} alt="fb-img" className="w-[25px] h-[25px] mt-4" />
      <Image src={twitter} alt="fb-img" className="bg-[#FF9F0D] w-[25px] h-[25px] mt-5"/>
      <Image src={pineterest} alt="fb-img" className="w-[25px] h-[25px] mt-5"/>
      <Image src={line} alt="line" className="w-[20px] h-[200px] mt-4" />
    </div>
      
      <div className="mr-[200px]">

        <h1 className="text-[#FF9F0D] text-[32px] font-great-vibes mt-28 ">
        Its Quick & Amusing!
      </h1>

      <h2 className=" text-[#FF9F0D] text-5xl mt-4 ">
        Th
        <span className="text-white ">
          e Art of speed
          <br /> food Quality
        </span>
        
      </h2>

      <p className=" mt-24">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/>
        Varlus sed pharetra dictum neque massa congue
      </p>

      <button className="rounded-[30px] bg-[#FF9F0D] h-[60px] w-[190px] mt-12  ">
        see menu
      </button>
      
      </div>
      

      <Image src={eggPlate} alt="main-image" height={400} width={600} className="h-[450px] mt-14" />
</div>
  );
};

export default Header;
