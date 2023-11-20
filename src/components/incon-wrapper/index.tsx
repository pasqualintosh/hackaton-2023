export function IconWrapper(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className='bg-primary-grey h-7 w-7 rounded-3xl flex items-center justify-center'>
      {props.children}
    </div>
  );
}
