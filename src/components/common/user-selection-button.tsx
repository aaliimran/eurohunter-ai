// user-selection-button.js
import React from "react";

const UserSelectionButton: React.FC<any> = ({
  icon,
  text,
  isActive,
  onClick,
}) => {
  const iconClass = isActive
    ? "text-[#1830FF]"
    : "text-[#141619] group-hover:text-[#1830FF]";
  const IconComponent = React.cloneElement(icon, { className: iconClass });

  return (
    <button
      onClick={onClick}
      className={`group flex py-[24px] px-[20px] justify-center items-center gap-[8px] flex-[1_0_0] rounded-[16px] border transition duration-300 ${
        isActive
          ? "border-[#1830FF] bg-[#F1F6FF]"
          : "border-[#DFE1E5] hover:border-[#1830FF] hover:bg-[#F1F6FF]"
      }`}
    >
      <div className="flex flex-col justify-center items-center">
        {IconComponent}
        <span
          className={`text-center font-title text-[16px] font-semibold transition duration-300 ${
            isActive
              ? "text-[#1830FF]"
              : "text-[#141619] group-hover:text-[#1830FF]"
          }`}
        >
          {text}
        </span>
      </div>
    </button>
  );
};

export default UserSelectionButton;
