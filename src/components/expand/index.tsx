export function ExpandButton(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="bg-primary-grey-button p-3 rounded-3xl justify-center items-center"
      {...props}
    >
      <p className=" text-[#ffffff70] font-semibold text-xs text-center">
        Expand
      </p>
    </div>
  );
}
export function ExpandWrapper(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className=" items-end justify-end flex mt-2">{props.children}</div>
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
    <div className=" flex flex-col justify-center items-center">
      <div
        className={`border-b-[1px] border-[#ffffff20] ${
          props.isFullscreen ? "w-[50vw] " : "w-[100%]"
        } h-[40px] flex`}
      ></div>
      <div
        className={`mt-10 px-8 pt-8 ${
          props.isFullscreen ? "flex flex-row items-center justify-center " : ""
        }`}
      >
        <div className="">
          <p className="pb-5 text-white font-semibold text-2xl max-w-[266px]">{`${props.stop} stops ${props.km}`}</p>
          {!props.isFullscreen ? (
            <p className="text-[#ffffff50] text-xl max-w-[266px] ">
              {props.stops.map((stop, index, array) =>
                index === array.length - 1 ? `${stop}` : `${stop}, `
              )}
            </p>
          ) : (
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              {props.stops.map((stop) => (
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="text-[#ffffff] text-xl max-w-[266px]">{`${stop}`}</span>
                </li>
              ))}
            </ol>
          )}

          {props.children}
        </div>
      </div>
    </div>
  );
}
