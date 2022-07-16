import React from "react";
import "./SortSelect.module.css";

const SortSelect = ({options, defaultValue, value, onChange}) => {

  return (
    <div className="select">
      <select
        value={value}
        onChange={event => onChange(event.target.value)}
      >
        <option disabled value="">
          {defaultValue}
        </option>

        {/* index - заменить потом на уникальный id */}
        {options.map((option, index) => 
          <option
            value={option.value}  
            key={index}
            method={option.method}
          >
          {option.name}
          </option>  
        )}
      </select>
    </div>
  );
};

export default SortSelect;
