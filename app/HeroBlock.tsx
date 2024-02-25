import GreenButton from "./GreenButton";
import pattern1 from "@/public/images/bg-pattern-1.svg";
import pattern2 from "@/public/images/bg-pattern-2.svg";
import heroImage from "@/public/images/image-hero.webp";
import Image from "next/image";
import React from "react";

export type HeroBlockProps = {
  className?: string;
};

export default function HeroBlock(props: HeroBlockProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <div className=" bg-dark-purple">
        <section className="heroHeader relative mb-16 mt-8 flex flex-col items-center overflow-visible px-4 md:mb-[56px] md:mt-[24px] lg:mb-[50px] lg:mt-2">
          <h1
            className="text-center font-fraunces text-[50px] font-medium leading-none text-white
          md:max-w-[500px] md:text-[60px] md:tracking-[0.01em] lg:max-w-[635px] lg:text-[80px]"
          >
            Data{" "}
            <span className="underline decoration-eucaplyptus decoration-[3px] underline-offset-8">
              tailored
            </span>{" "}
            to your needs.
          </h1>

          <GreenButton
            href="#"
            classname="mt-[42px] py-[14px] px-[22px]
            md:mt-[40px]
            lg:py-[15px] lg:px-[30px] lg:mt-[33px]"
          >
            Learn more
          </GreenButton>

          <Image
            src={pattern1}
            alt="bg-pat-1"
            className="absolute hidden md:-left-[228px] md:-top-[50px] md:block lg:-left-[140px] lg:-top-[34px] "
          />
          <Image
            src={pattern2}
            alt="bg-pat-2"
            className="absolute z-10 hidden w-[175px] md:-right-[95px] md:bottom-[-94px] md:block lg:-right-[50px] lg:bottom-[-92px] "
          />
        </section>
      </div>

      <HeroImage />
    </div>
  );
}

type HeroImageProps = {
  className?: string;
};

export function HeroImage(props: HeroImageProps) {
  return (
    <section
      className={`relative flex justify-center bg-ghost-white ${props.className}`}
    >
      <div
        className="absolute h-full w-full bg-dark-purple"
        style={{ clipPath: "ellipse(90% 50% at center top)" }}
      ></div>
      <div className="relative pl-[18px] md:pl-[46px]">
        <Image
          src={heroImage}
          alt="hero image"
          className="h-[184px] w-[320px]
          md:h-[296px] md:w-[514px] lg:h-[441px] lg:w-[767px]"
        />
      </div>
    </section>
  );
}
