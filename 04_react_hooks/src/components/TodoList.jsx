import React, { useState } from "react";

function TodoList() {
  // 使用 useState 创建状态变量 todos，用于存储待办事项列表
  // 每个待办事项是一个对象，包含 text（事项内容）和 completed（是否完成）两个属性
  const [todos, setTodos] = useState([]);

  // 使用 useState 创建状态变量 inputValue，用于存储用户在输入框中输入的内容
  const [inputValue, setInputValue] = useState("");

  // 处理输入框内容变化的事件处理函数
  const handleInputChange = (event) => {
    // 更新 inputValue 状态为输入框中的当前值
    setInputValue(event.target.value);
  };

  // 添加待办事项的函数
  const addTodo = () => {
    // 检查输入内容是否为空（去掉首尾空格后）
    if (inputValue.trim()) {
      // 如果输入内容不为空，将新事项添加到 todos 列表中
      // 新事项的 completed 属性默认为 false（未完成）
      setTodos([...todos, { text: inputValue, completed: false }]);
      // 清空输入框
      setInputValue("");
    }
  };

  // 切换待办事项完成状态的函数
  const toggleTodoCompletion = (index) => {
    // 使用 map 方法遍历 todos 列表
    const newTodos = todos.map((todo, i) =>
      // 如果当前项的索引与传入的索引匹配，则切换其 completed 状态
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    // 更新 todos 状态为新的列表
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>TodoList代办清单</h1>
      {/* 输入框和添加按钮 */}
      <div>
        <input
          type="text"
          value={inputValue} // 输入框的值绑定到 inputValue 状态
          onChange={handleInputChange} // 当输入内容变化时调用 handleInputChange
          placeholder="输入" // 输入框的占位符
        />
        <button onClick={addTodo}>添加代办</button>{" "}
        {/* 点击按钮调用 addTodo 函数 */}
      </div>
      {/* 待办事项列表 */}
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index} // 每个事项的唯一标识
            style={{
              textDecoration: todo.completed ? "line-through" : "none", // 如果事项已完成，显示为划线
              cursor: "pointer", // 鼠标悬停时显示为手型
            }}
            onClick={() => toggleTodoCompletion(index)} // 点击事项时调用 toggleTodoCompletion
          >
            {todo.text} {/* 显示事项内容 */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
