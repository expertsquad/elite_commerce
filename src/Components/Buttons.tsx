export const Button = ({
  children,
  className,
  handler,
}: {
  children: React.ReactNode;
  className?: string;
  handler?: () => void;
}) => {
  const classes = `flex items-center justify-center ${className}`;
  // if handler exist then return button with onClick
  if (handler) {
    return (
      <button className={classes} onClick={handler}>
        {children}
      </button>
    );
    // if handler does not exist then return button with type submit
  } else {
    return (
      <button className={classes} type="submit">
        {children}
      </button>
    );
  }
};
