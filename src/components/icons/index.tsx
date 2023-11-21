export function Pin() {
  return (
    <svg
      width='12'
      height='14'
      viewBox='0 0 12 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.156 13.5587C8.899 12.023 12 8.8856 12 6.00649C12 4.41347 11.3679 2.8857 10.2426 1.75926C9.11742 0.632825 7.5913 0 6 0C4.4087 0 2.88258 0.632825 1.75736 1.75926C0.632141 2.8857 2.37122e-08 4.41347 0 6.00649C0 8.8856 3.1 12.023 4.844 13.5587C5.16211 13.8429 5.5736 14 6 14C6.4264 14 6.83789 13.8429 7.156 13.5587ZM4 6.00649C4 5.47548 4.21071 4.96623 4.58579 4.59075C4.96086 4.21527 5.46957 4.00433 6 4.00433C6.53043 4.00433 7.03914 4.21527 7.41421 4.59075C7.78929 4.96623 8 5.47548 8 6.00649C8 6.5375 7.78929 7.04676 7.41421 7.42223C7.03914 7.79771 6.53043 8.00865 6 8.00865C5.46957 8.00865 4.96086 7.79771 4.58579 7.42223C4.21071 7.04676 4 6.5375 4 6.00649Z'
        fill='white'
      />
    </svg>
  );
}
export function Close() {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14 8L8 14M8 8L14 14M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}
export function Dots() {
  return (
    <div className='h-7 border border-dashed border-white border-1 w-[1px] self-center'></div>
  );
}

interface ICloseWrapperProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  press: () => void;
}

export function CloseWrapper(props: ICloseWrapperProps) {
  return (
    <div
      className='absolute right-[55px] top-[40px] w-6 h-6 justify-center items-center'
      onClick={props.press}
    >
      {props.children}
    </div>
  );
}
