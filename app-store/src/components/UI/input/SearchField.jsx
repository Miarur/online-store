import React from "react";
import cl from "./SearchField.module.css";

const SearchField = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} className={cl.myInput} {...props}></input>
  );
});

export default SearchField;
