export const ArrowIcon = ({
  className,
  color,
  width,
  height,
}: {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width || '14'}
      height={height || '9'}
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path d="M13.1084 0.572754L7.1084 7.57275L1.1084 0.572753" stroke={color || 'white'}  />
    </svg>
  );
};

export default ArrowIcon;
