export function Panel(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className='absolute top-[172px] left-[30px] bg-primary-default rounded-xl  py-14 justify-center items-center'>
      {props.children}
    </div>
  );
}
