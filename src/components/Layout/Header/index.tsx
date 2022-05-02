import cc from "classcat";
import { useState } from "react";

import useSelectTag from "../../../hooks/useSelectTag";
import Card from "../../Card";
import Tag from "../../Tag";
import Navbar from "../Navbar";
import cm from "../style.module.scss";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => setVisible(!visible);

  const { tags, selectedTag, handleTagSelect } = useSelectTag();

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
