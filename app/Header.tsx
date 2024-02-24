import Image from "next/image";
import logoLight from "@/public/images/logo-light.svg";

export function Header() {
  return (
    <div className="bg-dark-purple flex flex-col items-stretch">
      <header className="flex items-stretch justify-between my-8 mx-4 md:mx-10 lg:mx-[165px] lg:my-[56px]">
        <div className="relative w-24">
          <Image src={logoLight} alt="logo" fill className=" object-contain" />
        </div>
        <a href="#" className="font-bold text-white hover:text-eucaplyptus underline decoration-eucaplyptus decoration-[3px] underline-offset-8">
          Apply for access
        </a>
      </header>
    </div>
  );
}
