import facebook from "@/public/images/icon-facebook.svg";
import twitter from "@/public/images/icon-twitter.svg";
import instagram from "@/public/images/icon-instagram.svg";
import Image from "next/image";


export type FooterProps = {
  className?: string;
};

export function Footer(props: FooterProps) {
  return <div className={`flex justify-center ${props.className}`}>
    <Image src={facebook} alt="facebook" width={20} height={20} />
    <Image src={twitter} alt="twitter" width={20} height={20} className="ml-7" />
    <Image src={instagram} alt="instagram" width={20} height={20} className="ml-7" />
  </div>;
}
