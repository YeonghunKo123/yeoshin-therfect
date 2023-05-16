import React from "react";

import { InView } from "react-intersection-observer";
import { InviewComponent } from "../common/InviewComponent";
import Image from "next/image";
// bg-[url('/img/mobile_skin_structure.png')] bg-cover bg-center bg-no-repeat
export const FifthMobileSlide = ({ innerHeight }: { innerHeight: number }) => {
  return (
    <section
      className="relative w-screen overflow-hidden  font-pretendard font-[600] text-white"
      style={{ height: innerHeight }}
    >
      <div className="h-screen w-screen">
        <img
          src={"/img/mobile_skin_structure.png"}
          className="h-full w-screen"
          alt="mobile_skin_structure"
        />
      </div>
      <div
        className="absolute pl-[30px]"
        style={{ bottom: "calc(80px + env(safe-area-inset-bottom))" }}
      >
        <div className="mb-[8.7vh] flex items-center justify-start gap-[12px]">
          <p className="font-sans text-[20px] font-[400] leading-[23px]">
            Principle
          </p>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref} className="flex h-[34px] w-full items-center ">
                <div className="relative h-[13px] w-[21px]">
                  <span
                    className={`absolute ${
                      inView ? "animate-dotAppearFirst" : ""
                    }  bottom-0 left-0 inline-block h-[3.2px] w-[3.2px] rounded-full bg-white opacity-0`}
                  ></span>
                  <span
                    className={`absolute ${
                      inView ? "animate-dotAppearSecond" : ""
                    }  left-[6px] top-[3px] inline-block h-[4.2px] w-[4.2px] rounded-full bg-white opacity-0`}
                  ></span>
                  <span
                    className={`absolute ${
                      inView ? "animate-dotAppearThird" : ""
                    }  right-0 top-0 inline-block h-[6.4px] w-[6.4px] rounded-full bg-white opacity-0`}
                  ></span>
                </div>
              </div>
            )}
          </InView>
        </div>
        <InviewComponent
          threshold={0}
          animationClassName="animate-smoothUpFirst"
        >
          <div>
            <p className="mb-[0.1vh] font-futura text-[30px] font-[700]">
              피부 속까지
            </p>
            <p className="mb-[36px] font-pretendard text-[30px] font-[700]">
              고주파 에너지
            </p>
          </div>
        </InviewComponent>
        <InviewComponent animationClassName="animate-smoothUpSecond">
          <div>
            <p
              className={`mt-[4.3vh] pr-[30px] font-pretendard text-[16px] font-[400] leading-[30px]`}
            >
              {
                "강력한 고주파 에너지로 조직의 응고를 일으켜 피부탄력에 도움을 줍니다.\n고주파 전달 > 피부속 깊이 고주파 전달 > 피부 저항 및 열 발생 > 피부응고 및 재생 > 피부탄력 도움"
              }
            </p>
          </div>
        </InviewComponent>
      </div>
    </section>
  );
};
