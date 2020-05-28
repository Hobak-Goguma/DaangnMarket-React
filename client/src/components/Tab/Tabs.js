import React, { useState } from "react";
import Tab from "./Tab";

const Tabs = ({ selected, children }) => {
  const [select, setSelect] = useState(selected || 0);

  const handleChange = (index) => {
    setSelect(index);
  };

  return (
    <div>
      <ul className="inline">
        {children.map((elem, index) => {
          let style = index === select ? "selected" : "";
          return (
            <li
              className={style}
              key={index}
              onClick={() => handleChange(index)}
            >
              {elem.props.title}
            </li>
          );
        })}
      </ul>
      <div className="tab">{children[select]}</div>
    </div>
  );
};

export default Tabs;
