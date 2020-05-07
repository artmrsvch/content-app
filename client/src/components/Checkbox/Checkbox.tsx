import React from 'react';

type MainCheckboxType ={isMain?: boolean | undefined}

const Checkbox: React.FC<MainCheckboxType> = ({isMain}) => {
  return (
    <div className="checkbox">
      <label className="checkbox-label">
        <input data-role={isMain ? 'main' : 'secondary'} type="checkbox" name="checkBtn" className="form-checkbox" />
        <span className="checkbox-style"></span>
      </label>
    </div>
  );
};

export default Checkbox;
