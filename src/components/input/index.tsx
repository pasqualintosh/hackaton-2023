export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type='text'
      className='border border-gray-200 border-1 bg-primary-default rounded-3xl w-[266px] text-white font-semibold py-2 px-5'
      {...props}
    />
  );
}

export function InputWrapper(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className='flex flex-row items-center justify-center gap-x-5 px-8'>
      {props.children}
    </div>
  );
}
