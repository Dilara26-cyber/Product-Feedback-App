import cc from "classcat";
import { FaAngleUp } from "react-icons/fa";

import cm from "./style.module.scss";

export interface TagProps extends React.HTMLAttributes<HTMLParagraphElement> {
  hasIcon?: boolean;
  isSelected?: boolean;
}

const Tag = ({
  hasIcon = false,
  isSelected,
  children,
  ...htmlParagraphElement
}: TagProps) => {
  return (
    <p
      className={cc([
        cm.tag,
        hasIcon ? cm.icon : "",
        isSelected ? cm.active : "",
        "flex",
      ])}
      {...htmlParagraphElement}
    >
      {hasIcon && <FaAngleUp />}
      {children}
    </p>
  );
};

export default Tag;
