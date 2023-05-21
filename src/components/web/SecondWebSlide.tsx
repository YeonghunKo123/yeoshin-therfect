import Image from "next/image";
import React from "react";

import entireRobot from "../../../public/img/therfect_entire_robot.png";
import { InView } from "react-intersection-observer";
import { InviewComponent } from "../common/InviewComponent";

export const SecondWebSlide = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-white">
      <div className="flex justify-between">
        <div className="self-start pl-[8.3vw] pt-[15vh]">
          <div className="mb-[110px] flex items-center justify-start gap-[20px]">
            <p className="font-futura text-[30px] font-[500] leading-[40px]">
              Product
            </p>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className="mt-[8px] flex h-[34px] w-full items-center "
                >
                  <div className="relative h-[18px] w-[31px]">
                    <span
                      className={`absolute ${
                        inView ? "animate-dotAppearFirst" : ""
                      }  bottom-0 left-0 inline-block h-[5px] w-[5px] rounded-full bg-black opacity-0`}
                    ></span>
                    <span
                      className={`absolute ${
                        inView ? "animate-dotAppearSecond" : ""
                      }  left-[9px] top-[4px] inline-block h-[6.3px] w-[6.3px] rounded-full bg-black opacity-0`}
                    ></span>
                    <span
                      className={`absolute ${
                        inView ? "animate-dotAppearThird" : ""
                      }  right-0 top-0 inline-block h-[9.5px] w-[9.5px] rounded-full bg-black opacity-0`}
                    ></span>
                  </div>
                </div>
              )}
            </InView>
          </div>
          <InviewComponent animationClassName="animate-smoothUpFirst">
            <div>
              <p className="font-futura text-[4vw] leading-[8vh]">4MHz</p>
              <p className="mb-[36px] font-pretendard text-[4vw] leading-[8.7vh]">
                고성능 고주파
              </p>
            </div>
          </InviewComponent>
          <InviewComponent animationClassName="animate-smoothUpSecond">
            <div>
              <p
                className={`font-pretendard text-[1.3vw] font-[300] leading-[4.5vh] sm:text-[1.5vw] sm:leading-[3vh] md:leading-[3.5vh] lg:leading-[4.5vh] xlg:leading-[5.5vh]`}
              >
                {
                  "식약처 허가와 논문, 그리고 12년간 검증된 고성능 고주파 열 에너지.\n자사 장비를 전세계 12개국에서 12년 동안 유통하며 효과적인 고주파를\n연구, 개발하였습니다."
                }
              </p>
            </div>
          </InviewComponent>
        </div>
        <div className="absolute right-[-19vw] h-screen w-screen">
          <Image
            className="object-contain"
            src={entireRobot}
            priority
            fill
            alt="entire_robot"
          />
        </div>
      </div>
    </section>
  );
};
