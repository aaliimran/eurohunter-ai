"use client";
import React, { useState } from "react";
import {
  AppliedIcon,
  CalendarIcon,
  HomeIcon,
  JobsIcon,
  ProfileIcon,
} from "@/utils/icons-with-hover/icons";
import HeaderAfterAuth from "@/components/headers/header-after-auth";
import MainSectionButton from "@/components/common/main-section-button";
import Home from "../home/page";
import Profile from "../profile/page";
import Jobs from "../jobs/page";
import Applied from "../applied/page";
import Calendar from "../calendar/page";

const Main: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("main-home");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <HeaderAfterAuth />
      <div className="flex py-6 px-0 justify-center items-start gap-10 ">
        <div className="flex flex-col min-w-[295px]">
          <MainSectionButton
            icon={<HomeIcon />}
            text="Home"
            isActive={activeButton === "main-home"}
            onClick={() => handleButtonClick("main-home")}
          />
          <MainSectionButton
            icon={<ProfileIcon />}
            text="Profile"
            isActive={activeButton === "profile"}
            onClick={() => handleButtonClick("profile")}
          />
          <MainSectionButton
            icon={<JobsIcon />}
            text="Jobs"
            isActive={activeButton === "jobs"}
            onClick={() => handleButtonClick("jobs")}
          />
          <MainSectionButton
            icon={<AppliedIcon />}
            text="Applied"
            isActive={activeButton === "applied"}
            onClick={() => handleButtonClick("applied")}
          />
          <MainSectionButton
            icon={<CalendarIcon />}
            text="Calendar"
            isActive={activeButton === "calendar"}
            onClick={() => handleButtonClick("calendar")}
          />
        </div>
        {/* <div className="flex-1 flex justify-center"> */}
        {activeButton === "main-home" && <Home />}
        {activeButton === "profile" && <Profile />}
        {activeButton === "jobs" && <Jobs />}
        {activeButton === "applied" && <Applied />}
        {activeButton === "calendar" && <Calendar />}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Main;
