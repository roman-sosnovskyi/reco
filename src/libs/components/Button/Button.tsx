import { ButtonProps } from "./types/Button.types";

const Button = ({ children, onClick, disabled, className }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
