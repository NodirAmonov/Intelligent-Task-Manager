import React from "react";
import { useState } from "react";

function Terms({ terms }) {
  const [checked, setChecked] = useState([]);
  const handleCheck = (event) => {
    let updateList = [...checked];
    if (event.target.checked) {
      updateList = [...checked, event.target.value];
    } else {
      updateList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updateList);
  };
  const isChecked = (terms) =>
    checked.includes(terms) ? "checked-item" : "not-checked-item";

  return (
    <div className="terms">
      <ul className={isChecked(terms)}>
        <input type="checkbox" onChange={handleCheck} value={terms} />
        <span className="checkmin"></span>
        <li>{terms.element}</li>
      </ul>
      <div>{terms.deadLine}</div>
    </div>
  );
}
