import { MouseEventHandler } from "react";

export const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const classes = `flex items-center justify-center gap-2 ${className}`;
  // if handler exist then return button with onClick
  if (onClick) {
    return (
      <button className={classes} onClick={onClick}>
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
