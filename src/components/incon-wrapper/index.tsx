export function IconWrapper(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className='bg-primary-grey h-7 w-7 rounded-3xl flex items-center justify-center my-1'>
      {props.children}
    </div>
  );
}

export function EmptyWrapper(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className=' h-7 w-7 rounded-3xl flex items-center justify-center '>
      {props.children}
    </div>
  );
}
