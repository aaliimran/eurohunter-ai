import React from "react";
import Image from "next/image";
import LandingPageImgTextProps from "@/components/common/landing-pages-img-text-props";
import LandingPagesSlogan from "@/components/common/landing-pages-slogan";
import LandingPageHeader from "@/components/headers/landing-page-header";

const ForJobSeeker = () => {
  return (
    <div className="flex w-[100%] flex-col items-center">
      <LandingPageHeader />
      <div className="max-w-[1232px] flex flex-col p-[16px] pt-[0px] pb-[120px] gap-[72px]">
        <LandingPagesSlogan
          title={`Your all-in-one Job Seek <br/>assistant`}
          text={`At EuroHunter, we aim to help you land your dream job faster and stress-free <br/>with AI tools that we provide`}
        />
        <div className="flex flex-col justify-center items-center p-[20px] pt-0 pb-0">
          <h1 className="text-[#000000] text-[44px] text-center font-title font-bold leading-[56px]">
            Personal AI-assistant{" "}
          </h1>
          <p className="text-[#7B818C] text-[20px] text-center font-title font-semibold leading-[28px]">
            Our AI mentor helps you create your ultimate job profile and
            accurately plan out <br /> each stage of your application process
          </p>
          <Image
            src="/images/landing-images/personal-ai-assistant.svg"
            alt=""
          />
        </div>
        <LandingPageImgTextProps
          title={"Technical Interview <br/>with AI"}
          text={
            "Nail down your technical and behavioral interviews <br/> with our AI-copilot"
          }
          img={"/images/landing-images/interview-with-ai.svg"}
          flexDir={"flex-row"}
        />
        <LandingPageImgTextProps
          title={"AI-Powered CV Creation and Enhancement"}
          text={
            "AI-powered  CV creation Craft your CV, customize cover letters, and track your application progress in <br/>one place"
          }
          img={"/images/landing-images/creation-and-enhancement.svg"}
          flexDir={"flex-row"}
        />
        <LandingPageImgTextProps
          title={"AI Assistant for Application Support"}
          text={
            "Get tailored recommendations, craft compelling cover letters, and follow a structured preparation <br/>plan for your interviews."
          }
          img={"/images/landing-images/application-support.svg"}
          flexDir={"flex-row-reverse"}
        />
      </div>
    </div>
  );
};

export default ForJobSeeker;
