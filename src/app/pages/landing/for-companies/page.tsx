import CompaniesLandingFooter from "@/components/common/companies-landing-footer";
import LandingPageImgTextProps from "@/components/common/landing-pages-img-text-props";
import LandingPagesSlogan from "@/components/common/landing-pages-slogan";
import LandingPageHeader from "@/components/headers/landing-page-header";
import React from "react";

const ForCompanies = () => {
  return (
    <div className="flex max-w-[100%] flex-col items-center">
      <LandingPageHeader />
      <div className="max-w-[1232px] flex flex-col p-[16px] pt-[0px] pb-[120px]">
        <div className=" flex flex-col justify-center items-center">
          <LandingPagesSlogan
            title={`Streamline Your Hiring Process with Euro hunter`}
            text={`At Eurehunter, we understand that finding the right talent can be time-<br/>consuming and challenging. That’s why we offer a suite of AI-powered tools <br/>designed to simplify and accelerate your hiring process. Here’s how we can help`}
          />
        </div>
        <LandingPageImgTextProps
          title={"Efficient Candidate Applications"}
          text={
            "Receive applications from qualified candidates who are actively seeking opportunities. Our platform attracts top talent, ensuring you have access to the best candidates for your open positions."
          }
          img={"/images/landing-images/candidate-application.svg"}
          flexDir={"flex-row"}
        />
        <LandingPageImgTextProps
          title={"AI-Generated Job <br/>Descriptions"}
          text={
            "Save time and effort with job descriptions crafted by our advanced AI. Simply provide the key details, and our AI will generate compelling and accurate descriptions that attract the right candidates."
          }
          img={"/images/landing-images/job-descriptions.svg"}
          flexDir={"flex-row-reverse"}
        />
        <LandingPageImgTextProps
          title={"Time-Saving Candidate Screening"}
          text={
            "Eliminate the hassle of preliminary interviews. Our service conducts thorough assessments of candidates' skills and qualifications, providing you with a shortlist of pre-verified applicants. This means you can focus on interviewing only the most suitable candidates, saving valuable time and resources."
          }
          img={"/images/landing-images/candidate-screening.svg"}
          flexDir={"flex-row"}
        />
        <div className="max-w-[1200px] flex flex-col justify-center items-center p-0 pt-[40px] pb-[80px] gap-20">
          <h1 className="text-[#000000] text-[44px] font-title font-bold">
            How it works
          </h1>
          <div className="flex flex-row gap-10">
            <CompaniesLandingFooter
              img={"/icons/landing-icons/briefcase-landing.svg"}
              title={"Post Your <br/>Job "}
              text={
                "Use our AI to create detailed job descriptions that highlight the key aspects of the role and attract top talent"
              }
            />
            <CompaniesLandingFooter
              img={"/icons/landing-icons/direct-normal.svg"}
              title={"Receive Qualified Applications"}
              text={
                "Get applications from candidates who are matched to your job requirements."
              }
            />
            <CompaniesLandingFooter
              img={"/icons/landing-icons/profile-tick.svg"}
              title={"Pre-Verified <br/>Candidates "}
              text={
                "Our AI conducts initial interviews and assessments, verifying candidates' skills and qualifications."
              }
            />
            <CompaniesLandingFooter
              img={"/icons/landing-icons/persons-landing.svg"}
              title={"Efficient <br/>Hiring "}
              text={
                "Focus on the final interviews and make informed hiring decisions with confidence."
              }
            />
          </div>
        </div>
        <div className="max-w-[1200px] flex flex-col justify-center items-center p-0 pt-[40px] pb-[80px] gap-20">
          <h1 className="text-[#000000] text-[44px] font-title font-bold">
            Key Benefits
          </h1>
          <div className="flex flex-row gap-10">
            <CompaniesLandingFooter
              img={"/icons/landing-icons/step-1.svg"}
              title={"Reduce Hiring <br/>Time"}
              text={
                "Focus only on the most suitable candidates thanks to our pre-screening process."
              }
            />
            <CompaniesLandingFooter
              img={"/icons/landing-icons/step-2.svg"}
              title={"Attract Better <br/>Talent"}
              text={
                "AI-generated job descriptions ensure you attract the best candidates for your roles."
              }
            />
            <CompaniesLandingFooter
              img={"/icons/landing-icons/step-3.svg"}
              title={"Cost-Effective <br/>Hiring "}
              text={
                "Streamline the hiring process, saving on recruitment costs and reducing time-to-hire."
              }
            />
            <CompaniesLandingFooter
              img={"/icons/landing-icons/step-4.svg"}
              title={"Higher Quality Candidates"}
              text={
                "Our assessments ensure that only the most qualified candidates make it to your interview stage."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForCompanies;
