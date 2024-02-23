import founder from "@/public/images/image-founder.webp";
import Image from "next/image";
import { GreenButton } from "./GreenButton";

export type ApplyBlockProps = {
  className?: string;
};

export default function ApplyBlock(props: ApplyBlockProps) {
  return (
    <div
      className={`flex flex-col items-center md:items-end px-10 lg:px-[165px] ${props.className}`}
    >
      <div className="relative w-[281px] h-[281px] lg:w-[477px] lg:h-[477px] md:self-start -z-10">
        <Image src={founder} fill alt="founder" className=" object-contain" />
      </div>
      <div className="flex flex-col shrink-0 bg-dark-purple p-8 
      md:p-14 lg:p-16 w-[343px] md:w-[514px] lg:w-[730px] -mt-14 md:-mt-32 lg:-mt-72">
        <h2 className=" font-fraunces font-semibold text-[32px] md:text-[48px] lg:text-[56px] text-center md:text-left text-white">
          Be the first to test
        </h2>
        <p className="text-white text-center  md:text-left pt-4">
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <GreenButton href="#" classname="mt-6 md:self-start">
          Apply for access
        </GreenButton>
      </div>
    </div>
  );
}
