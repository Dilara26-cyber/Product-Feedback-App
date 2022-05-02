import cc from "classcat";

import cm from "./style.module.scss";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  type: "main" | "secondary";
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
