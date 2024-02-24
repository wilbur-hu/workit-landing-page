import { HeroImage } from "./HeroImage";
import { GreenButton } from "./GreenButton";
import FeatureBlock, { FeatureBlockProps } from "./FeatureBlock";
import ApplyBlock from "./ApplyBlock";
import logoDark from "@/public/images/logo-dark.svg";
import Image from "next/image";

import pattern1 from "@/public/images/bg-pattern-1.svg";
import pattern2 from "@/public/images/bg-pattern-2.svg";

export function Main() {
  const features: FeatureBlockProps[] = [
    {
      number: 1,
      title: "Actionable insights",
      description:
        "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
    },
    {
      number: 2,
      title: "Data-driven decisions",
      description:
        "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
    },
    {
      number: 3,
      title: "Always affordable",
      description:
        "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
    },
  ];

  return (
    <main
      className="flex flex-col items-stretch relative overflow-clip
    "
    >
      <div className=" bg-dark-purple">
        {/* Title Section */}
        <section className="titleSection overflow-visible flex flex-col items-center px-4 mt-8 mb-16 lg:mt-2 lg:mb-[50px] relative">
          <h1 className="font-fraunces text-[50px] md:text-[60px] lg:text-[80px] leading-none 
          font-semibold text-white text-center lg:max-w-[635px] md:max-w-[500px]">
            Data{" "}
            <span className="underline decoration-eucaplyptus decoration-[3px] underline-offset-8">
              tailored
            </span>{" "}
            to your needs.
          </h1>

          <GreenButton href="#" classname="mt-[36px]">Learn more</GreenButton>

          <Image src={pattern1} alt="bg-pat-1" className="absolute hidden md:block md:top-0 lg:-left-[140px] md:-left-[240px]" />
          <Image src={pattern2} alt="bg-pat-2" className="w-[175px] z-10 absolute hidden md:block md:bottom-[-90px] lg:-right-[45px] md:-right-[100px] " />
        </section>
      </div>



      {/* Hero Image */}
      <HeroImage />

      {/* Feature Section */}
      <section className="bg-ghost-white pt-6 flex flex-col lg:flex-row justify-center px-[82px]">
        {features.map((feature) => (
          <FeatureBlock className=" mt-10 mx-4 md:mx-[98px] lg:mx-[13px]" key={feature.number} {...feature} />
        ))}
      </section>

      {/*Curve End*/}
      <div
        style={{ clipPath:  "ellipse(55% 50% at center top)" }}
        className="h-[72px] lg:h-[344px] bg-ghost-white"
      ></div>

      {/* Apply Section */}
      <ApplyBlock className="mt-16 lg:mt-0" />

      {/* Logo */}
      <Image className="bottomLogo self-center mt-[74px] lg:mt-[120px]" src={logoDark} alt="logo" width={96} height={24}  />
    </main>
  );
}
