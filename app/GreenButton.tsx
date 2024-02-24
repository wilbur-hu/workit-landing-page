export type GreenButtonProps = {
  href: string;
  children?: React.ReactNode;
  classname?: string;
};

export function GreenButton(props: GreenButtonProps) {
  return (
    <a
      href={props.href}
      className={`self-center bg-eucaplyptus text-dark-purple font-bold py-[15px] px-[30px] ${props.classname} hover:bg-dark-purple hover:text-eucaplyptus border-eucaplyptus border-[2px]`}
    >
      {props.children}
    </a>
  );
}
