import cc from "classcat";
import { useState } from "react";

import Navbar from "../Navbar";
import cm from "../style.module.scss";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => setVisible(!visible);

  return (
    <header>
      <Navbar visible={visible} handleVisible={handleVisible} />
      <section>Section</section>
    </header>
  );
};

export default Header;
