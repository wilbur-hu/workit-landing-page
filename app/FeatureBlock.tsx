export type FeatureBlockProps = {
  number: number;
  title: string;
  description: string;
  className?: string;
};

function CircleNumber({
  number,
  className,
}: {
  number: number;
  className?: string;
}) {
  return (
    <div
      className={`flex h-[48px] w-[48px] shrink-0 items-center  justify-center rounded-full border border-davys-grey
        font-fraunces text-xl font-medium md:h-[48px] md:w-[48px] lg:h-[55px] lg:w-[55px] 
        ${className}`}
    >
      {number}
    </div>
  );
}

export default function FeatureBlock(props: FeatureBlockProps) {
  return (
    <div
      className={`flex flex-col items-center lg:w-[354px] ${props.className}`}
    >
      <CircleNumber
        number={props.number}
        className="mb-[20px]
        md:hidden  
        lg:mb-[54px] lg:mt-[4px] lg:flex"
      />
      <div className="flex items-center">
        <CircleNumber
          number={props.number}
          className="md:[mt-4px] mr-8 hidden md:flex lg:hidden"
        />
        <div>
          <h2
            className="text-center font-fraunces text-[28px] font-medium  tracking-[.01em]
          text-dark-purple 
          md:text-left md:tracking-[.01em] 
          lg:text-center lg:text-[32px] lg:font-semibold"
          >
            {props.title}
          </h2>
          <p
            className="mt-[12px] text-center leading-[28px]  text-davys-grey 
          md:mt-[14px] md:text-left md:leading-[28px] 
          lg:mt-[24px] lg:text-center lg:leading-[32px]"
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
