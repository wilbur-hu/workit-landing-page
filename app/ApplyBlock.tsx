import founder from "@/public/images/image-founder.webp";
import Image from "next/image";
import { GreenButton } from "./GreenButton";
import pattern3 from "@/public/images/bg-pattern-3.svg";

export type ApplyBlockProps = {
  className?: string;
};

export default function ApplyBlock(props: ApplyBlockProps) {
  return (
    <div
      className={`apply-block flex flex-col items-center md:items-end px-10 lg:px-[165px] ${props.className}`}
    >
      <div className="applyBlock__founderImageContainer relative w-[281px] h-[281px] lg:w-[477px] lg:h-[477px] md:self-start -z-10">
        <Image
          src={founder}
          fill
          alt="founder"
          className="applyBlock__founderImage object-contain"
        />
      </div>
      <div
        className="applyBlock__descriptionContainer relative flex flex-col shrink-0 bg-dark-purple p-8 
      md:p-14 lg:p-16 w-[343px] md:w-[514px] lg:w-[730px] -mt-14 md:-mt-32 lg:-mt-72"
      >
        <h2 className="applyBlock__descriptionHeader font-fraunces font-semibold text-[32px] md:text-[48px] lg:text-[56px] text-center md:text-left text-white">
          Be the first to test
        </h2>
        <p className="applyBlock__descriptionContent text-white text-center  md:text-left pt-4">
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <GreenButton
          href="#"
          classname="applyBlock__applyButton mt-6 md:self-start"
        >
          Apply for access
        </GreenButton>

        <Image src={pattern3} alt="bg-pat-3" className="absolute hidden md:block lg:-bottom-12 lg:right-20 md:-bottom-24 md:right-0 w-[200px]" />
      </div>
    </div>
  );
}
