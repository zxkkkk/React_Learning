import { useState, useRef, useEffect } from "react";

// PreviousValue 组件，用于展示当前计数和上一个计数
const PreviousValue = () => {
  // 使用 useState Hook 创建一个名为 count 的状态变量，初始值为 0
  const [count, setCount] = useState(0);

  // 使用 useRef Hook 创建一个 ref 对象，用于存储上一个计数值
  const prevCountRef = useRef();

  // 使用 useEffect Hook 在每次 count 更新后执行
  // 这个 effect 会在 count 变化后立即运行，更新 prevCountRef 的值
  useEffect(() => {
    prevCountRef.current = count; // 将当前的 count 值保存到 prevCountRef 中
  }, [count]); // 依赖数组，只有 count 发生变化时才会运行 effect

  // 渲染组件，显示当前计数和上一个计数
  return (
    <div>
      <p>当前计数: {count}</p> {/* 显示当前的计数值 */}
      <p>上一个计数: {prevCountRef.current}</p> {/* 显示上一个计数值 */}
      <button onClick={() => setCount(count + 1)}>增加</button>{" "}
      {/* 提供一个按钮来增加计数 */}
    </div>
  );
};

export default PreviousValue;
