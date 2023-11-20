interface IProps {
  isShowingBorder?: boolean;
}

export function Separator({ isShowingBorder = true }: IProps) {
  return (
    <div className='h-7 w-7 flex justify-center items-center mx-8'>
      {/* {isShowingBorder && (
        <div className='h-7 border border-dashed border-white border-1 w-[1px] self-center' />
      )} */}
    </div>
  );
}
