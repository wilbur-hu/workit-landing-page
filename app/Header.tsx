import Image from "next/image";
import logoLight from "@/public/images/logo-light.svg";

export function Header() {
  return (
    <div className="bg-dark-purple flex flex-col items-stretch">
      <header className="flex justify-between my-8 mx-4">
        <div className="relative w-24">
          <Image src={logoLight} alt="logo" fill className=" object-contain" />
        </div>
        <a href="#" className="font-bold text-white underline decoration-eucaplyptus decoration-[3px] underline-offset-8">
          Apply for access
        </a>
      </header>
    </div>
  );
}
