export type FeatureBlockProps = {
  number: number;
  title: string;
  description: string;
  className?: string;
};

export default function FeatureBlock(props: FeatureBlockProps) {
  return (
    <div className={`flex flex-col items-center mt-10 p-4 ${props.className}`}>
      <div className="border border-davys-grey rounded-full w-12 h-12 flex items-center justify-center font-fraunces font-semibold text-xl">
        {props.number}
      </div>
      <div>
        <h2 className="font-fraunces font-semibold text-[28px] text-center text-dark-purple mt-6 ">{props.title}</h2>
        <p className="text-center text-davys-grey mt-4">{props.description}</p>
      </div>
    </div>
  );
}
