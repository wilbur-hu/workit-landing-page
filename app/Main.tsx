import CFABlock from "./CFABlock";
import FeatureBlock, { FeatureBlockProps } from "./FeatureBlock";
import HeroBlock from "./HeroBlock";
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
      className="relative flex flex-col items-stretch overflow-clip
    "
    >
      <HeroBlock />

      {/* Feature Section */}
      <section
        className="flex flex-col justify-center bg-ghost-white pt-[22px]
        md:pt-[52px] 
        lg:flex-row lg:pt-[42px]"
      >
        {features.map((feature, idx) => {
          const mdTopMargin =
            idx !== 0 ? "md:mt-[44px]" : "md:mt-0 lg:mt-[44px]";
          return (
            <FeatureBlock
              className={`mx-[14px] mt-10
              md:mx-[96px] ${mdTopMargin} 
              lg:mx-[12px]`}
              key={feature.number}
              {...feature}
            />
          );
        })}
      </section>

      {/*Curve End*/}
      <div
        style={{ clipPath: "ellipse(55% 50% at center 24%)" }}
        className="h-[72px] bg-ghost-white md:h-[140px] lg:h-[230px]"
      ></div>

      {/* CFA Section */}
      <CFABlock
        className="mt-[100px] 
      md:mt-[63px] 
      lg:mt-[50px]"
      />

      {/* Logo */}
      <Image
        className="bottomLogo mt-[74px] self-center 
        md:mt-[80px]
        lg:mt-[120px]"
        src={logoDark}
        alt="logo"
        width={96}
        height={24}
      />
    </main>
  );
}
