interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isFullscreen?: boolean;
}

export function Panel(props: IProps) {
  if (props.isFullscreen) {
    return (
      <div className='absolute h-[100vh] w-[100vw] left-0 top-0  bg-primary-default py-14 justify-center items-center'>
        {props.children}
      </div>
    );
  }

  return (
    <div className='absolute top-[172px] left-[30px] bg-primary-default rounded-xl  py-14 justify-center items-center'>
      {props.children}
    </div>
  );
}

export function LeftWrapper(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className='flex flex-col justify-around items-center'>
      {props.children}
    </div>
  );
}

export function ContentWrapper(
  props: React.HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div className='flex flex-row justify-center items-center mx-8'>
      {props.children}
    </div>
  );
}
