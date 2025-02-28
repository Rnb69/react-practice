import { useState } from "react";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [showInput, setShowInput] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleClick = (e) => {
    setBackgroundColor("#1a1a1a");
    if (e.target.className === "container") {
      setShowInput(false);
      setBackgroundColor("#fff")
    }
  };
  return (
    <section
      className="container"
      style={{ backgroundColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default Search;
