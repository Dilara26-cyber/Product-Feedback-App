import cc from "classcat";

import cm from "./style.module.scss";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Determines type -therefore styles- for the text component.
   */
  type: "main" | "secondary" | "select";
}
const Text = ({
  type,
  children,
  className,
  ...htmlParagraphElement
}: TextProps) => {
  return (
    <p className={cc([cm[type], className || ""])} {...htmlParagraphElement}>
      {children}
    </p>
  );
};

export default Text;
