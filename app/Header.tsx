import Image from "next/image";
import logoLight from "@/public/images/logo-light.svg";

export function Header() {
  return (
    <div className="bg-dark-purple flex flex-col items-stretch">
      <header className="flex items-stretch justify-between my-8 mx-4 md:mx-[39px] md:my-[35px] lg:mx-[165px] lg:my-[56px]">
        <div className="relative w-[97px] h-[28px]">
          <Image src={logoLight} alt="logo" fill className="object-fill" />
        </div>
        <a href="#" className="font-semibold text-white hover:text-eucaplyptus underline decoration-eucaplyptus decoration-[3px] underline-offset-8">
          Apply for access
        </a>
      </header>
    </div>
  );
}
