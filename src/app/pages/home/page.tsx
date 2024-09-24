import React from "react";

const Home = () => {
  return (
    <div className="flex gap-10">
      <div className="max-w-[530px] flex flex-col gap-6 pb-20">
        <h1 className="text-[#000000] text-[32px] font-title font-bold">
          Your Mentor
        </h1>
        <div>
          <button className="rounded-lg px-4 py-[11px] text-[#000000] text-[14px] font-title font-semibold bg-[#F3F4F6]">
            To do
          </button>
          <button className="rounded-lg px-4 py-[11px] text-[#7B818C] text-[14px] font-title font-semibold">
            In progress
          </button>
          <button className="rounded-lg px-4 py-[11px] text-[#7B818C] text-[14px] font-title font-semibold">
            Done
          </button>
        </div>
        <div className="rounded-3xl p-6 flex flex-col gap-5 bg-[#F3F4F6]">
          <h1 className="text-[#000000] text-[20px] font-title font-bold leading-[27px]">
            Hi! I've found some companies for you, let's write to them.
          </h1>
          <div className="rounded-2xl p-4 flex justify-center items-start gap-3 bg-[#FFFFFF] border border-color-#DFE1E5">
            <img src="/icons/home-icons/krypton-tech.svg" alt="" />
            <div className="flex flex-col gap-[6px]">
              <h1 className="text-[#000000] text-[14px] font-title font-bold ">
                Krypton Tech
              </h1>
              <p className="text-[#7B818C] text-[14px] font-title font-normal">
                An international company specialising in consulting, technology
                services and outsourcing
              </p>
              <div></div>
            </div>
            <button className="w-[10%] flex justify-center">
              <img src="/icons/home-icons/export.svg" alt="export" />
            </button>
          </div>
          <h1 className="text-[#000000] text-[20px] font-title font-bold leading-[27px]">
            I've prepared a personalised letter for this company, shall we send
            it?
          </h1>
          <div>
            <p className="text-[#000000] text-[14px] font-title font-semibold">
              Message
            </p>
            <div className="rounded-2xl px-3 py-2 flex flex-col gap-2  bg-[#FFFFFF] border border-color-#DFE1E5">
              <div className="flex flex-col gap-6 text-[#000000] text-[14px] font-title font-normal leading-[23px]">
                <h3>
                  My name is Aziz, and I am interested in potential employment
                  opportunities at Krypton Tech. I admire your company's
                  achievements and would love to join your team.
                </h3>
                <h3>
                  I have 7 years of experience in product design and
                  development. In my last role at Tumar Soft, I collaborated
                  with product managers to develop projects using a unified
                  scoring system. This system simplified the loan application
                  process for clients, leading to higher approval rates.
                </h3>
                <h3>
                  I believe my experience and skills can be valuable to your
                  team. Attached is my resume for your review. I would
                  appreciate any information on possible job openings and
                  employment conditions.
                </h3>
                <h3>
                  Please contact me via email at aziz.begishov@eurohunter.ai
                  Thank you for your time and consideration.
                </h3>
                <h3>Best regards, Aziz</h3>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <button>
                    <img src="/icons/home-icons/copy.svg" alt="copy" />
                  </button>
                  <button>
                    <img src="/icons/home-icons/refresh.svg" alt="refresh" />
                  </button>
                </div>
                <label className="text-[#A5ABB8] text-[12px] font-title font-semibold">
                  761/1500
                </label>
              </div>
            </div>
          </div>
          <div className="rounded-2xl py-2 px-4 flex flex-row justify-between items-center bg-[#FFFFFF] border border-color-#DFE1E5">
            <div className="flex flex-row gap-2">
              <img src="/icons/home-icons/preview.svg" alt="" />
              <div className="flex flex-col gap-1">
                <p className="text-[#000000] text-[14px] font-title font-bold">
                  Aziz Begishov_CV.pdf
                </p>
                <span className="text-[#7B818C] text-[12px] font-title font-normal">
                  Last uploaded: 28/5/24/ 16:14
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button>
                <img
                  src="/icons/home-icons/download-button.svg"
                  alt="download"
                />
              </button>
              <button>
                <img src="/icons/home-icons/edit-pen.svg" alt="edit" />
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="rounded-lg py-3 px-4 bg-[#3F5EFF] text-[#FFFFFF] text-[14px] font-title font-bold">
              Make a plan
            </button>
            <button className="rounded-lg py-3 px-4 bg-[#0000000A] text-[#000000] text-[14px] font-title font-bold">
              Not interested
            </button>
          </div>
        </div>
      </div>
      <div className="pt-16 flex flex-col gap-4">
        <h1 className="text-[#000000] text-[20px] font-title font-bold">
          Companies for you
        </h1>
      </div>
    </div>
  );
};

export default Home;
