import cc from "classcat";
import { ImPlus } from "react-icons/im";

import cm from "./style.module.scss";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Type mainly chooses button color.
   * Create contains all the purple buttons like post etc.
   */
  type: "create" | "cancel" | "delete";
  /**
   * Whether the button has plus icon or not. By default it is set to false.
   */
  hasIcon?: boolean;
  /**
   * Whether the button has parent width. 
   */
  fullWidth?: boolean;
}

const Button = ({ type, hasIcon, children }: ButtonProps) => {
  return (
    <button className={cc(["flex", cm.btn, hasIcon ?  cm.icon : "", cm[type]])}>
      {hasIcon && <ImPlus />}{children}
    </button>
  );
};

export default Button;
