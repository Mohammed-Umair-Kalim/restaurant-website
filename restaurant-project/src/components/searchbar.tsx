import React from "react";
import bag from "../../public/png & svg/handbag.png";
import iglass from "../../public/png & svg/mg.png";
import Image from "next/image";

const Searchbar = () => {
  return (
    <div className="mt-5 flex relative ">

      <input
        placeholder="Search..."
        className=" bg-black border-[1px] border-[#FF9F0D] rounded-[27px] w-[300px]"
        
      />
      <Image src={iglass} alt="search-img" height={34} width={34} className="absolute left-[260px] top-[5px]" />

      <Image src={bag} alt="handbag" height={35} width={35} />
    </div>
  );
};

export default Searchbar;
