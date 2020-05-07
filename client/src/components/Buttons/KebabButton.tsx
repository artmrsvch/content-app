import React from "react";

const KebabButton: React.FC = () => {
  
    return (
      <div data-type="open" className="menu__wrapper">
        <div data-type="open" className="menu__item--kebab">
          <div data-type="open" className="circle"></div>
          <div data-type="open" className="circle"></div>
          <div data-type="open" className="circle"></div>
        </div>
      </div>
    );
};

export default KebabButton;
