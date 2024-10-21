import { MouseEventHandler } from "react";

export interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean | any;
}
export const Button = ({
  children,
  className,
  onClick,
  disabled,
}: IButtonProps) => {
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
      <button
        className={`${classes} ${disabled && "opacity-50 pointer-events-none"}`}
        type="submit"
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
};
