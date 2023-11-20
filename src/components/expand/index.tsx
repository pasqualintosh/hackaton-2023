export function Expand(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className='bg-primary-grey-button p-3 rounded-3xl justify-center items-center'
      {...props}
    >
      <p className=' text-[#ffffff70] font-semibold text-xs text-center'>
        Expand
      </p>
    </div>
  );
}
export function ExpandWrapper(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return <div className=' items-end justify-end flex'>{props.children}</div>;
}

interface IBottomSectionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  km: string;
  stop: number;
  stops: string[];
}
export function BottomSection(props: IBottomSectionProps) {
  return (
    <div className=' border-t-[1px] border-[#ffffff20] mt-10 flex-none px-8 pt-8'>
      <p className='text-white font-semibold text-2xl'>{`${props.stop} stops ${props.km} km`}</p>
      <p className='text-[#ffffff50] text-xs max-w-[266px]'>
        {props.stops.map((stop, index, array) =>
          index === array.length - 1 ? `${stop}` : `${stop}, `
        )}
      </p>
      {props.children}
    </div>
  );
}
