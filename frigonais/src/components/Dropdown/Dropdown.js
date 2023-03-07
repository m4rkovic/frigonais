import React from "react";
import { useEffect, useState } from "react";

import styles from "./Dropdown.module.css";

// required:
// onChange={selectHandler} <- returns e.target.value, e.target.name, e.target.visibleValue
// values= single object {} OR array of objects-> [{},{} ... {}]
// if values is object {} :
//    values={{1: "one", 2: "two", 3: "three"}}
//    the key (1) gets returned as e.target.value, the value (one) is what is shown (e.target.visibleValue)
// if array of objects [{}...] :
//    values=[{name: "maraton", id: 1000}...{name: "blabla", id:1003}]
//    each object has to have a 'name', the whole object gets returned
//
// optional:
// preselect="user.gender" <- if something should be selected
// name="gender" <- u can access onChange with e.target.name
// disabledValues = [true, false] <- disables options based on array that's given

const Dropdown = (props) => {
  const [selected, setSelected] = useState();

  const select = (e) => {
    setSelected(e.target.visibleValue);
    props.onChange && props.onChange(e);
  };

  useEffect(() => {
    props.preselect ? setSelected(props.preselect) : setSelected("");
  }, [props.preselect]);

  const optionsContainerStyle = `${styles.optionsContainer} 
    ${props.opened ? styles.show : ""}`;

  const optionStyle = (value, index, key) => {
    let style = `${styles.button} ${styles.option} `;
    if (props.disabledValues && !props.disabledValues[index]) {
      style += ` ${styles.disabled}`;
    }
    if (value === selected || key === selected) {
      style += ` ${styles.selected}`;
    }
    return style;
  };

  const renderValues = () => {
    if (Array.isArray(props.values)) {
      return renderArray();
    } else {
      return renderNonArray();
    }
  };

  const renderNonArray = () => {
    return Object.entries(props.values).map((entry, index) => (
      <div
        className={optionStyle(entry[1], index, entry[0])}
        key={"select-" + index}
        onClick={() =>
          select({
            target: {
              value: entry[0],
              name: props.name,
              visibleValue: props.visibleValues
                ? props.visibleValues[index]
                : entry[1],
            },
          })
        }
      >
        {props.visibleValues ? props.visibleValues[index] : entry[1]}
      </div>
    ));
  };

  const renderArray = () => {
    return Object.values(props.values).map((value, index) => (
      <div
        className={optionStyle(
          props.visibleValues ? props.visibleValues[index] : value.name,
          index
        )}
        key={"select-" + index}
        onClick={() =>
          select({
            target: {
              value,
              name: props.name,
              visibleValue: props.visibleValues
                ? props.visibleValues[index]
                : value.name,
            },
          })
        }
      >
        {props.visibleValues
          ? props.visibleValues[index]
          : value.name || "Object is missing 'name'"}
      </div>
    ));
  };

  return (
    // tabIndex necessary to allow focus & blur to happen inside a div
    <div
      className={optionsContainerStyle}
      style={{
        bottom: props.bottom,
        top: props.top,
        left: props.left,
        right: props.right,
      }}
    >
      {(props.values && renderValues()) || (
        <>
          <div className={styles.missing}>.....MISSING VALUES.....</div>
          <div className={styles.missing}>.....ADD 'values' PROP.....</div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
