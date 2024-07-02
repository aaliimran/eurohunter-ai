import UserSelectionCards from "@/components/common/user-selection-cards";
import LandingPageHeader from "@/components/headers/landing-page-header";
import React from "react";

const Landing = () => {
  return (
    <div className="flex w-[100%] flex-col items-center">
      <LandingPageHeader />
      <div className=" max-w-[1232px] flex flex-col p-[16px] pt-[40px] pb-[120px] gap-[72px]">
        <h1 className="text-[#A5ABB8] text-[72px] text-center font-title font-bold leading-[92px]">
          The <span className="text-[#000000]"> AI Mentor </span> for Job{" "}
          <span className="text-[#000000]">Seekers</span> <br />
          and <span className="text-[#000000]">Employers</span>
        </h1>
        <div className="flex items-center justify-center gap-[40px]">
          <UserSelectionCards
            link="pages/landing/for-job-seeker"
            title="For job seeker"
            text="With Mentor AI, say goodbye to the stress of endless interviews. Create your profile once, and let our AI streamline your job search, connecting  you effortlessly with the right opportunities."
            bgColor="bg-custom-gradient-blue"
          />
          <UserSelectionCards
            link="pages/landing/for-companies"
            title="For Companies"
            text="Mentor AI will help you once and for all forget about the endless interview stages and make the hiring and onboarding process a seamless experience."
            bgColor="bg-custom-gradient-green"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
