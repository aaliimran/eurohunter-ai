import React from "react";
import Image from "next/image";

const StartPageHeader = () => {
  return (
    <div className="w-full bg-[#FFF] shadow-[0_1px_0px_0px_rgba(0,0,0,0.10)]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <button className="flex items-center justify-center gap-3 ">
          <Image
            src="/icons/auth-icons/arrow.svg"
            alt="Back arrow"
            className="w-4 h-4"
          />
          <span className="text-[#000] font-title text-[16px] font-semibold">
            back
          </span>
        </button>
        <Image src="/images/common-images/text-logo.svg" alt="Logo" />
      </div>
    </div>
  );
};

export default StartPageHeader;
