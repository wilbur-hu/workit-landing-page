import Image from "next/image";
import heroImage from "@/public/images/image-hero.webp";

export function HeroImage() {
  return (
    <section className="relative bg-ghost-white">
      <div className="absolute w-full h-full bg-dark-purple"
        style={{ clipPath: "ellipse(90% 50% at center top)" }}
      ></div>
      <div className="relative w-80 h-48 mx-auto">
        <Image
          src={heroImage}
          fill
          alt="hero image"
          className="object-contain" />
      </div>
    </section>
  );
}
