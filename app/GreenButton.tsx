export type GreenButtonProps = {
  href: string;
  children?: React.ReactNode;
  classname?: string;
};

export default function GreenButton(props: GreenButtonProps) {
  return (
    <a
      href={props.href}
      className={`self-center border-[2px] border-eucaplyptus bg-eucaplyptus font-semibold text-dark-purple hover:bg-dark-purple hover:text-eucaplyptus ${props.classname} `}
    >
      {props.children}
    </a>
  );
}
