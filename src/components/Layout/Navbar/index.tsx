import cc from "classcat";
import { BiMenu } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";

import Text from "../../Typography/Text";
import cm from "../style.module.scss";

export interface NavbarProps {
  visible: boolean;
  handleVisible(): void;
}

const Navbar = ({ visible, handleVisible }: NavbarProps) => {
  return (
    <nav className={cc(["gradient", "flex", cm.nav])}>
      <section>
        <h4>Frontend Mentor</h4>
        <Text type="secondary">Feedback Board</Text>
      </section>
      {visible ? (
        <MdOutlineClose onClick={handleVisible} />
      ) : (
        <BiMenu onClick={handleVisible} />
      )}
    </nav>
  );
};

export default Navbar;
