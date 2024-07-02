import Link from "next/link";
import React from "react";

const UserSelectionCards: React.FC<any> = ({ title, text, bgColor, link }) => {
  return (
    <div
      className={`p-6 rounded-[27px] flex flex-col justify-center max-w-[580px] mx-auto ${bgColor}`}
    >
      <h1 className="text-[#000000] text-[36px] font-title font-bold mb-4">
        {title}
      </h1>
      <p className="text-[#000000] text-[16px] font-title font-normal leading-7 mb-6">
        {text}
      </p>
      <div className="flex space-x-3">
        <Link href={link}>
          <button className="px-4 py-[9px] border-[1px] border-solid border-[#282B30] rounded-lg">
            <span className="text-[14px] text-[#00000] font-title font-bold">
              Learn more
            </span>
          </button>
        </Link>
        <button className="px-4 py-[9px] bg-[#3F5EFF] rounded-lg">
          <span className="text-[14px] text-[#ffffff] font-title font-bold">
            Sign up
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserSelectionCards;
