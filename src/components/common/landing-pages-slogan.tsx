"use client";
import React from "react";
import { useRouter } from "next/navigation";

const LandingPagesSlogan: React.FC<any> = ({ title, text }) => {
  const route = useRouter();

  const handleRouteToSignUp = () => {
    route.push("/pages/auth/login");
  };
  return (
    <div className="max-w-[1200px] pt-[40px] pb-[80px] flex flex-col justify-center items-center gap-8">
      <h1
        className="text-[#000000] text-[72px] text-center font-title font-bold leading-[92px] "
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p
        className="text-[#7B818C] text-[20px] text-center font-title font-semibold leading-[28px]"
        dangerouslySetInnerHTML={{ __html: text }}
      />

      <button
        onClick={handleRouteToSignUp}
        className="flex py-[20px] px-[32px] justify-center items-center rounded-[8px] bg-[#3F5EFF]"
      >
        <span className="text-[#FFF] font-title text-[20px] font-bold">
          Get Started
        </span>
      </button>
    </div>
  );
};

export default LandingPagesSlogan;
