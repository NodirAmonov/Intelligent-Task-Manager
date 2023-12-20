import React from "react";
import Terms from "./Terms.js";
import { useState } from "react";

function TermInfo({ termInfo }) {
  const [termDate, setTermDate] = useState(new Date());
  const date = termDate.getDate();
  const minutes = termDate.getMinutes().toString().padStart(2, "0");
  var hours = termDate.getHours().toString().padStart(2, "0");
  const time = hours + ":" + minutes;

  const deadLine = time.toString();

  return (
    <div className="terminfo">
      {}
      <h1 className="terminfo-title-time">Bugun:</h1>
      {termInfo.map((terms, index) => (
        <Terms key={index} terms={terms} deadLine={deadLine} />
      ))}
    </div>
  );
}

export default TermInfo;
