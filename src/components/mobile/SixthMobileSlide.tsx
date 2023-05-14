import React from "react";

import ntts from "../../../public/img/ntts.svg";
import Image from "next/image";
import { InviewComponent } from "../common/InviewComponent";

export const SixthMobileSlide = () => {
  return (
    <section className="relative flex h-screen w-screen flex-col justify-between overflow-hidden bg-black px-[47px] py-[50px] font-pretendard font-[400] text-white">
      <div className="absolute  left-[50%] top-[50%] h-[5.3vh] w-[79vw] -translate-x-1/2 -translate-y-[240%]">
        <InviewComponent animationClassName={"animate-smoothUpFirst"}>
          <div className="flex-center mb-[32px]">
            <Image width={157} height={40} src={ntts} alt="ntts" priority />
          </div>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpSecond"}>
          <p className="relative mb-[19px] text-center font-pretendard text-[16px] font-[400] leading-[30px]">
            {"심부열을 효과적으로 전달하는 자체\n개발한 독특한 열전달 구조³"}
          </p>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpThird"}>
          <p className="relative font-pretendard text-[16px] font-[400] leading-[30px] text-[#696969]">
            {
              "³Non-pole Therma Transmission Structures 자사에서 직접 개발한 독특한 열전달 구조로, 효과적으로 고주파 에너지를 표피와 진피에 전달합니다."
            }
          </p>
        </InviewComponent>
      </div>
      <div className="flex  flex-col gap-[34px]">
        <div className="flex justify-between">
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
        </div>
      </div>

      <div className="flex flex-col  gap-[34px]">
        <div className="flex justify-between">
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
          <div className="h-[11vw] w-[11vw] bg-main-orange"></div>
        </div>
      </div>
    </section>
  );
};
