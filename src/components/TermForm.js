import GetTermDateTime from "./TermDate";
import { useState } from "react";
import TermInfo from "./TermInfo";

function Todolist({ AddTermInfo }) {
  const [placeholder, setPlaceholder] = useState("Yangi vazifa yo'zish");
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const [Terms, setTerms] = useState("");
  const [deadLine, setDeadLine] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTerms = {
      element: Terms,
      deadLine: deadLine,
    };

    setShow((show) => !show);

    AddTermInfo(newTerms);
    setPlaceholder("Yangi vazifa yo'zish");
  };
  return (
    <div className="nav-Navbar">
      <form className="nav-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={terms}
          placeholder={placeholder}
          onChange={(e) => setTerms(e.target.value)}
          className="nav-Placeholder"
          required
          minLength="5"
        />
        <input className="nav-Button" type="submit" value="+" />
      </form>
      <GetTermDateTime />
    </div>
  );
}
