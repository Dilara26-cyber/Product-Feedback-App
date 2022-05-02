import cc from "classcat";
import {
	useContext,
	useState,
} from "react";

import {
	TagContextType,
	TagSelectContext,
} from "../../../context/TagSelectProvider";
import Card from "../../Card";
import Tag from "../../Tag";
import Navbar from "../Navbar";
import cm from "../style.module.scss";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => setVisible(!visible);

  const { tags, handleTagSelect, selectedTag } = useContext(TagSelectContext) as TagContextType;

  return (
    <header>
      <Navbar visible={visible} handleVisible={handleVisible} />
      <aside className={cc([cm.aside, visible ? cm.shown : cm.hidden])}>
        <Card type="nav" className="flex" isTags>
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              onClick={() => handleTagSelect(tag.id)}
              isSelected={selectedTag!.id === tag.id}
            >
              {tag.name}
            </Tag>
          ))}
        </Card>
      </aside>
      <div className={cc([cm.overlay, visible ? cm.shown : cm.hidden])}></div>
    </header>
  );
};

export default Header;
