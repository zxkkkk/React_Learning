import React, { useRef } from "react";
import Counter2 from "./Counter2";

// Parent2 组件，用于演示如何通过 ref 调用子组件 Counter2 的自定义方法
const Parent2 = () => {
  // 使用 useRef 创建一个引用对象，用于访问 Counter2 组件
  const counterRef = useRef();

  // 渲染组件，包括一个 Counter2 子组件和一个按钮
  return (
    <div>
      <Counter2 ref={counterRef} /> {/* 将 counterRef 传递给 Counter2 */}
      <button onClick={() => counterRef.current.reset()}>
        Reset Count {/* 按钮文本 */}
      </button>
    </div>
  );
};

export default Parent2;
