import React from "react";

type OptionsType = {
  options: string[]
}

const Select: React.FC<OptionsType> = ({options}) => {
    return (
      <select className="select" name="status">
        {options.map((option, index)=>(
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    );
};

export default Select;
