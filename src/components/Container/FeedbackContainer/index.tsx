import cc from "classcat";

import { ReactComponent as CommentOutlined } from "../../../assets/icons/icon-comments.svg";
import data from "../../../data/data.json";
import Card from "../../Card";
import Tag from "../../Tag";
import Text from "../../Typography/Text";
import cm from "./style.module.scss";

type Props = {};

const FeedbackContainer = (props: Props) => {
  console.log(data.productRequests);
  return (
    <>
        {data.productRequests.map((feedback) => (
          <Card type="feedback" className={cm.container}>
            <section>
              <h4>{feedback.title}</h4>
              <Text type="main">{feedback.description}</Text>
              <Tag>{feedback.category}</Tag>
            </section>
            <Tag hasIcon>{feedback.upvotes}</Tag>
            {feedback.comments && (
              <Text type="comment" className={cc(["flex", cm.comment])}>
              <CommentOutlined style={{ marginRight: "6px" }} />
              {feedback.comments?.length}
            </Text>
            )}
            </Card>
        ))}
    </>
  );
};

export default FeedbackContainer;
