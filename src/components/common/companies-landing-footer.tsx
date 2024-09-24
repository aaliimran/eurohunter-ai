import React from "react";
import Image from "next/image";

const CompaniesLandingFooter: React.FC<any> = ({ img, title, text }) => {
  return (
    <div className="flex flex-col  items-start gap-6">
      <Image src={img} alt="" />
      <h1
        className="text-[#000000] text-[24px] text-start font-title font-bold "
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p
        className=" text-[#7B818C] text-[16px] text-start font-title font-medium"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default CompaniesLandingFooter;
