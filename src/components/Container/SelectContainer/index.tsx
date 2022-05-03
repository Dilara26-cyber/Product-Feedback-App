import cc from "classcat";

import Button from "../../Button";
import Select from "../../Select";
import cm from "./style.module.scss";

const SelectContainer = () => {
  return (
    <div className={cc([cm.container])}>
      <section className={cc(["container", "flex"])}>
        <Select />
        <Button type="create" hasIcon>
          Add Feedback
        </Button>
      </section>
    </div>
  );
};

export default SelectContainer;
