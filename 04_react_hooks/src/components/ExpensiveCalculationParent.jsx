import { useState } from "react";
import ExpensiveCalculation from "./ExpensiveCalculation";

// 父组件 ExpensiveCalculationParent
const ExpensiveCalculationParent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* 增加按钮，用于更新 count */}
      <button onClick={() => setCount(count + 1)}>增加</button>
      {/* 将 count 传递给 ExpensiveCalculation 组件 */}
      <ExpensiveCalculation number={count} />
    </div>
  );
};

export default ExpensiveCalculationParent;
