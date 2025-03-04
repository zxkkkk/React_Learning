import React from "react";

// ExpensiveComponent 组件，用于展示一个可能消耗较多资源的操作
const ExpensiveComponent = ({ onAction }) => {
  return <button onClick={onAction}>Do Action</button>;
};

export default ExpensiveComponent;
