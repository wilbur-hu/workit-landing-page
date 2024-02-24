export type GreenButtonProps = {
  href: string;
  children?: React.ReactNode;
  classname?: string;
};

export function GreenButton(props: GreenButtonProps) {
  return (
    <a
      href={props.href}
      className={`self-center bg-eucaplyptus text-dark-purple font-semibold lg:py-[15px] lg:px-[30px] md:py-[13.5px] md:px-[22px] ${props.classname} hover:bg-dark-purple hover:text-eucaplyptus border-eucaplyptus border-[2px]`}
    >
      {props.children}
    </a>
  );
}
