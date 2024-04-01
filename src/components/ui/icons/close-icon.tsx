const CloseIcon = ({
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
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 34} height={height || 32} viewBox="0 0 34 32" fill="none" className={className}>
      <rect
        width="39.7259"
        height="6.86256"
        rx="3.43128"
        transform="matrix(0.739306 0.673369 -0.674647 0.738141 4.62988 0)"
        fill="#85A080"
      />
      <rect
        width="39.7259"
        height="6.86256"
        rx="3.43128"
        transform="matrix(0.739306 -0.673369 -0.674647 -0.738141 4.62988 32)"
        fill="#85A080"
      />
    </svg>
  );
};

export default CloseIcon;
