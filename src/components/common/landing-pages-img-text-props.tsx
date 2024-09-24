import React from "react";
import Image from "next/image";

const LandingPageImgTextProps: React.FC<any> = ({
  title,
  text,
  img,
  flexDir,
}) => {
  return (
    <div
      className={`max-w-[1200px] flex justify-center items-center ${flexDir}`}
    >
      <div className="flex flex-col gap-[12px]">
        <h1
          className="text-[#000000] text-[36px] text-start font-title font-bold leading-[47px] "
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="text-[#7B818C] text-[20px] text-start font-title font-semibold leading-[28px]"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <Image src={img} alt="" />
    </div>
  );
};

export default LandingPageImgTextProps;
