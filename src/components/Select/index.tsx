import cc from "classcat";
import {
	useContext,
	useState,
} from "react";

import { ReactComponent as CheckOutlined } from "../../assets/icons/icon-check.svg";
import { ReactComponent as DownOutlined } from "../../assets/icons/select-down.svg";
import { ReactComponent as UpOutlined } from "../../assets/icons/select-up.svg";
import {
	FilterContext,
	FilterContextType,
} from "../../context/FilterProvider";
import Text from "../Typography/Text";
import cm from "./style.module.scss";

const Select = () => {
  const { filters, handleFilterSelect, selectedFilter } = useContext(
    FilterContext
  ) as FilterContextType;

  const [visible, setVisible] = useState(false);

  const handleVisible = () => setVisible((prev) => !prev);

  const handleFilter = (filter: string) => {
    handleFilterSelect(filter);
    setVisible(false);
  };

  return (
    <section className={cm.select}>
      <Text type="select" onClick={handleVisible}>
        Sort by: <strong>{selectedFilter}</strong>{" "}
        {visible ? <UpOutlined /> : <DownOutlined />}
      </Text>
      {visible && (
        <ul>
          {filters.map((filter) => (
            <li
              className={cc([
                "flex",
                selectedFilter === filter ? cm.selected : "",
              ])}
              key={filter}
              onClick={() => handleFilter(filter)}
            >
              {filter}
              {selectedFilter === filter && <CheckOutlined />}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Select;
