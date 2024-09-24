"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LandingPageHeader = () => {
  const route = useRouter();

  const handleRouteToSignUp = () => {
    route.push("/pages/auth/login");
  };

  return (
    <div className="w-full bg-[#FFF] shadow-[0_1px_0px_0px_rgba(0,0,0,0.10)]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Image src="/images/common-images/text-logo.svg" alt="Logo" />
        <div className="flex gap-[40px]">
          <a
            href=""
            className="text-[#7B818C] text-center font-sans text-[16px] font-semibold"
          >
            For job seekers
          </a>
          <a
            href=""
            className="text-[#7B818C] text-center font-sans text-[16px] font-semibold"
          >
            For Companies
          </a>
        </div>
        <button
          onClick={handleRouteToSignUp}
          className="flex py-[12px] px-[16px] justify-center items-center rounded-[8px] bg-[#3F5EFF]"
        >
          <span className="text-[#FFF] font-title text-[14px] font-bold">
            Get Started
          </span>
        </button>
      </div>
    </div>
  );
};

export default LandingPageHeader;
