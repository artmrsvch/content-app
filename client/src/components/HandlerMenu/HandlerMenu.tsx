import React from 'react';
type MessageType = { message: string; isError: boolean };

const HandlerMenu: React.FC<MessageType> = ({ message, isError }) => {
  return (
    <aside className={`aside-bar ${isError && 'aside-bar_red'}`}>
      <span className="aside-bar__message">{message}</span>
    </aside>
  );
};

export default HandlerMenu;
