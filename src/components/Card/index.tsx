import cc from "classcat";

import cm from "./style.module.scss";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  type: "nav" | "feedback";
  isTags?: boolean;
}

const Card = ({ isTags = false, type, children, className, ...htmlElement }: CardProps) => {
  return (
    <section
      className={cc([cm.card, cm[type], isTags ? cm.tagContainer : cm.roadMap, className || ""])}
      {...htmlElement}
    >
      {children}
    </section>
  );
};

export default Card;
