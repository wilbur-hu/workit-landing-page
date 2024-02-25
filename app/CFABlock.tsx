import GreenButton from "./GreenButton";
import pattern3 from "@/public/images/bg-pattern-3.svg";
import founder from "@/public/images/image-founder.webp";
import Image from "next/image";

export type CFABlockProps = {
  className?: string;
};

export default function CFABlock(props: CFABlockProps) {
  return (
    <div
      className={`apply-block flex flex-col items-center px-10
      md:items-end 
      lg:px-[164px] ${props.className}`}
    >
      <div
        className="CFABlock__founderImageContainer relative -z-10 h-[281px] w-[281px] 
                  md:self-start 
                  lg:h-[477px] lg:w-[477px]"
      >
        <Image
          src={founder}
          fill
          alt="founder"
          className="CFABlock__founderImage object-contain"
        />
      </div>
      <div
        className="CFABlock__descriptionContainer relative -mt-[52px] flex w-[343px] shrink-0 flex-col bg-dark-purple
        md:-mt-[130px] md:w-[514px] md:px-[56px]
        lg:-mt-[304px] lg:w-[730px] lg:px-[64px]"
      >
        <h2
          className="CFABlock__descriptionHeader mt-[32px] text-center font-fraunces text-[32px] font-semibold text-white
          md:mt-[39px]  md:text-[48px]
          lg:mt-[54px] lg:text-left lg:text-[56px]"
        >
          Be the first to test
        </h2>
        <p
          className="CFABlock__descriptionContent  mt-[18px] px-[30px] text-center font-light leading-[28px] tracking-[0.008em] text-white
          md:mt-[18px] md:px-0 md:text-left
          lg:mt-[24px] lg:leading-[31px]"
        >
          Hi, I’m Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <GreenButton
          href="#"
          classname="CFABlock__applyButton mt-[22px] px-[22px] py-[14px] mb-[32px]
          md:mb-[54px] md:self-start
          lg:mt-[32px] lg:mb-[65px] lg:px-[22px] lg:py-[15px]"
        >
          Apply for access
        </GreenButton>

        <Image
          src={pattern3}
          alt="bg-pat-3"
          className="absolute hidden md:-bottom-24 md:right-0 md:block lg:-bottom-[44px] lg:right-[78px] lg:h-[180px] lg:w-[184px]"
        />
      </div>
    </div>
  );
}
