interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Submit(props: IProps) {
  return (
    <input
      type='submit'
      className=' w-[266px] bg-primary-bg-light text-white font-semibold py-2 rounded-3xl'
      {...props}
    />
  );
}
