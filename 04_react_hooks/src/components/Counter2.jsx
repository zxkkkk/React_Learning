import { useImperativeHandle, forwardRef, useState } from "react";

// Counter2 组件，使用 forwardRef 和 useImperativeHandle 暴露自定义方法给⽗组件
const Counter2 = forwardRef((props, ref) => {
  // 使用 useState 创建一个计数器状态，初始值为 10
  const [count, setCount] = useState(10);

  // 使用 useImperativeHandle 暴露一个 reset 方法给⽗组件
  useImperativeHandle(ref, () => ({
    reset: () => {
      setCount(0); // 重置计数器的值为 0
    },
  }));

  // 渲染组件，显示当前计数值
  return <div>Count: {count}</div>;
});

export default Counter2;
