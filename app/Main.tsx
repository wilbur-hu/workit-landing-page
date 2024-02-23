import { HeroImage } from "./HeroImage";
import { GreenButton } from "./GreenButton";
import FeatureBlock, { FeatureBlockProps } from "./FeatureBlock";
import ApplyBlock from "./ApplyBlock";
import logoDark from "@/public/images/logo-dark.svg";
import Image from "next/image";

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
      className="flex min-h-screen flex-col items-stretch
      relative 
    "
    >
      {/* Title Section */}
      <section className="bg-dark-purple flex flex-col items-center px-4 pt-8 pb-16 ">
        <h1 className="font-fraunces text-[50px] font-semibold text-white text-center">
          Data{" "}
          <span className="underline decoration-eucaplyptus decoration-[3px] underline-offset-8">
            tailored
          </span>{" "}
          to your needs.
        </h1>

        <GreenButton href="#" classname="mt-10">Learn More</GreenButton>
      </section>

      {/* Hero Image */}
      <HeroImage />

      {/* Feature Section */}
      <section className="bg-ghost-white pt-6">
        {features.map((feature) => (
          <FeatureBlock key={feature.number} {...feature} />
        ))}
      </section>

      {/*Curve End*/}
      <div
        style={{ clipPath: "ellipse(60% 50% at center top)" }}
        className="h-[72px] bg-ghost-white"
      ></div>

      {/* Apply Section */}
      <ApplyBlock className="mt-16" />

      {/* Logo */}
      <Image className="self-center mt-[74px]" src={logoDark} alt="logo" width={96} height={24}  />
    </main>
  );
}
