import React from "react";

const startPageHeader = () => {
  return (
    <header className="max-w-[100wv]">
      <div className=" flex h-[64px] min-w-[360px] px-[36px] p-0 flex-col justify-center items-center shrink-0 self-stretch  bg-[#FFF] shadow-[0_1px_0_0_rgba(0,0,0,0.10)]">
        <div className="flex justify-between items-center w-[100%]">
          <button className="flex items-center gap-3">
            <img
              src="/icons/pages-icons/auth-icons/start-icons/arrow.svg"
              alt=""
            />
            <span className="text-[#000] text-center font-title text-[16px] font-semibold ">
              back
            </span>
          </button>
          <img
            src="/images/pages-images/auth-images/start-images/text-logo.svg"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default startPageHeader;
