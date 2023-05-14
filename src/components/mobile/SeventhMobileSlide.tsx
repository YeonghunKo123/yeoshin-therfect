import React from "react";
import { InviewComponent } from "../common/InviewComponent";

export const SeventhMobileSlide = () => {
  return (
    <section className="relative flex h-screen w-screen flex-col justify-between overflow-hidden bg-black px-[47px] py-[50px] font-pretendard font-[400] text-white">
      <div className="absolute  left-[50%] top-[50%] h-[5.3vh] w-[79vw] -translate-x-1/2 -translate-y-[240%] font-[400]">
        <InviewComponent animationClassName={"animate-smoothUpFirst"}>
          <div className="flex-center-column mb-[20px]">
            <div className="font-sans text-[45px] leading-[40px]">Active</div>
            <div className="text-[20px] leading-[40px]">온도 컨트롤</div>
          </div>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpSecond"}>
          <p className="relative mb-[20px] text-center font-pretendard text-[16px] leading-[30px]">
            {"시술 목적에 따라 피부 온도를\n실시간으로 체크해 빈틈없이 시술⁴"}
          </p>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpThird"}>
          <p className="relative font-pretendard text-[16px] leading-[30px] text-[#696969]">
            {
              "⁴부드럽고 강력한 4MHz 고주파를 롱펄스 패턴으로 조사하여 통증은 줄이고, 즉각적으로 피부 온도를 측정하여 화상의 위험을 줄였습니다."
            }
          </p>
        </InviewComponent>
      </div>
      <div className="flex  flex-col gap-[34px]">
        <div className="flex justify-between">
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
        </div>
      </div>

      <div className="flex flex-col  gap-[34px]">
        <div className="flex justify-between">
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
          <div className="h-[11vw] w-[11vw] bg-[#CBF9FF]"></div>
        </div>
      </div>
    </section>
  );
};
