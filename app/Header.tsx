import logoLight from "@/public/images/logo-light.svg";
import Image from "next/image";

export function Header() {
  return (
    <div className="flex flex-col items-stretch bg-dark-purple">
      <header
        className="mx-4 my-[34px] flex items-stretch justify-between
       md:mx-[39px] md:my-[35px] lg:mx-[165px] lg:my-[56px]"
      >
        <div className="relative h-[28px] w-[97px]">
          <Image src={logoLight} alt="logo" fill className="object-fill" />
        </div>
        <a
          href="#"
          className="pr-[1px] pt-[2px] font-medium text-white underline decoration-eucaplyptus decoration-[3px] underline-offset-8 
          hover:text-eucaplyptus 
          md:pr-[1px] md:pt-[1px] 
          lg:pt-[3px]"
        >
          Apply for access
        </a>
      </header>
    </div>
  );
}
