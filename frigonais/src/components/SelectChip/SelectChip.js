import React from "react";
import { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

import styles from "../SelectChip/SelectChip.module.css";

const SelectChip = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(props.preselect);

  useEffect(() => {
    props.preselect ? setSelected(props.preselect) : setSelected("");
  }, [props.preselect]);

  const select = (e) => {
    setSelected(e.target.value);
    setShowOptions(false);
    props.onChange && props.onChange(e);
  };

  const blurHandler = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowOptions(false);
    }
  };

  const clickOptionHandler = () => {
    setShowOptions((prevState) => !prevState);
  };

  return (
    <div tabIndex="-1" className={styles.container} onBlur={blurHandler}>
      <div className={styles.chip} onClick={clickOptionHandler}>
        {props.svg}
        <span className={styles.span}>{selected}</span>
        {arrowDown}
      </div>
        <Dropdown
          top="100%"
          left="0px"
          onChange={select}
          opened={showOptions}
          values={props.values}
          preselect={props.preselect}
          visibleValues={props.visibleValues}
        ></Dropdown>
    </div>
  );
};

export default SelectChip;

const arrowDown = (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 0L5 6L0 0H10Z" fill="#111827"></path>
  </svg>
);
