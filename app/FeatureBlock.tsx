export type FeatureBlockProps = {
  number: number;
  title: string;
  description: string;
  className?: string;
};

function CircleNumber({number, className}: {number: number, className?: string}) {
  return (
    <div
      className={`border border-davys-grey rounded-full w-12 h-12 flex items-center 
      justify-center font-fraunces font-semibold text-xl shrink-0 ${className}`}
    >
      {number}
    </div>
  );
}

export default function FeatureBlock(props: FeatureBlockProps) {
  return (
    <div className={`flex flex-col items-center ${props.className}`}>
      <CircleNumber number={props.number} className="md:hidden lg:flex mb-6" />
      <div className="flex items-center">
      <CircleNumber number={props.number} className="hidden md:flex lg:hidden mr-8" />
        <div>
          <h2 className="font-fraunces font-semibold text-[28px] text-center md:text-left text-dark-purple">
            {props.title}
          </h2>
          <p className="text-center md:text-left text-davys-grey mt-4">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
