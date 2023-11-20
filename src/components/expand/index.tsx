export function ExpandButton(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
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
  return (
    <div className=' items-end justify-end flex mt-2'>{props.children}</div>
  );
}

interface IBottomSectionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  km: string;
  stop: number;
  stops: string[];
  isFullscreen?: boolean;
}
export function BottomSection(props: IBottomSectionProps) {
  return (
    <div
      className={`border-t-[1px] border-[#ffffff20] mt-10 px-8 pt-8 ${
        props.isFullscreen ? 'flex flex-row items-center justify-center ' : ''
      }`}
    >
      <div className=''>
        <p className='text-white font-semibold text-2xl max-w-[266px]'>{`${props.stop} stops ${props.km} km`}</p>
        <p className='text-[#ffffff50] text-xs max-w-[266px] '>
          {props.stops.map((stop, index, array) =>
            index === array.length - 1 ? `${stop}` : `${stop}, `
          )}
        </p>
        {props.children}
      </div>
    </div>
  );
}
