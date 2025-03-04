import React from "react";

// Child 组件，接收一个名为 handleClick 的 prop（函数）
const Child = ({ handleClick }) => {
  return <button onClick={handleClick}>Click me</button>;
};

export default Child;
