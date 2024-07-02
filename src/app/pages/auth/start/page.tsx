"use client";
import React, { useState } from "react";
import StartPageHeader from "@/components/headers/start-page-header";
import UserSelectionButton from "@/components/common/user-selection-button";
import { BriefcaseIcon, ProfileIcon } from "@/utils/icons-with-hover/icons";

const Start = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex justify-center">
      <div className="flex h-[100vh] w-[100vw] flex-col justify-center">
        <StartPageHeader />
        <div className="flex min-w-[360px] w-[100wv] py-[40px] px-[0px] pt-[40px] pb-[120px] flex-col justify-center items-center gap-[24px] flex-[1_0_0] ">
          <div className="flex flex-col justify-center items-center gap-[40px] max-w-[100%]">
            <div>
              <h1 className="text-[#000] text-center font-title text-[34px] font-bold">
                What are you interested in?
              </h1>
            </div>
            <div className="flex justify-center items-center gap-4 w-[140%]">
              <UserSelectionButton
                icon={<BriefcaseIcon />}
                text="For job seekers"
                isActive={activeButton === "jobSeekers"}
                onClick={() => handleButtonClick("jobSeekers")}
              />
              <UserSelectionButton
                icon={<ProfileIcon />}
                text="For companies"
                isActive={activeButton === "companies"}
                onClick={() => handleButtonClick("companies")}
              />
            </div>
            <div className="flex max-w-[300px] flex-col justify-center items-center gap-[8px] ">
              <button className="flex w-[100%] py-[16px] px-[20px] justify-center items-center rounded-[8px] bg-[#3F5EFF] ">
                <span className="text-[#FFF] text-center font-title text-[16px] font-bold">
                  Save & Continue
                </span>
              </button>
              <p className="text-[#000] text-center font-title text-[14px] font-normal">
                By continuing you accept our{" "}
                <button>
                  <u>standard</u>
                </button>{" "}
                and our{" "}
                <button>
                  <u>privacy policy </u>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
