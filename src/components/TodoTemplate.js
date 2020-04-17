import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">
        <div>일정</div>
        <div>관리</div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
