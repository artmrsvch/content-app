import React from 'react';
export const UserLinkList: React.FC = () => {
  return (
    <ul className="user-instruction-list">
      <li className="user-instruction-list__item">
        <span className="user-instruction-list__text">Как правильно заводить товар:</span>
        <a
          className="user-instruction-list__href"
          rel="noopener noreferrer"
          target="_blank"
          href="https://docs.google.com/document/d/1xLnNghW7Z9TX_Gcsc6yJ19j40-YqV3hSp7EGECWAcu0/edit">
          Инструкция
        </a>
      </li>
      <li className="user-instruction-list__item">
        <span className="user-instruction-list__text">Алгоритм работы и обязанности:</span>
        <a
          className="user-instruction-list__href"
          rel="noopener noreferrer"
          target="_blank"
          href="https://docs.google.com/document/d/1-0Vwkvh9KWjkUtYQpcsNVS2pSu_jVlJNmC3TeHYRA98/edit">
          Инструкция
        </a>
      </li>
      <li className="user-instruction-list__item">
        <span className="user-instruction-list__text">Правила ведения отчетости:</span>
        <a
          className="user-instruction-list__href"
          rel="noopener noreferrer"
          target="_blank"
          href="https://docs.google.com/document/d/1fQOQrmhlnqgYmKzmNsCIclMlL4VbxhR8N08bbGFWwRE/edit">
          Инструкция
        </a>
      </li>
      <li className="user-instruction-list__item">
        <span className="user-instruction-list__text">Список партнеров:</span>
        <a
          className="user-instruction-list__href"
          rel="noopener noreferrer"
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1O8edQZBMsAJQbYTKfL1vmlTWUMG6X4ked-YHTVq88fQ/edit#gid=0">
          Список
        </a>
      </li>
    </ul>
  );
};
