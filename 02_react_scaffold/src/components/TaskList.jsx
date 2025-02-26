import React from "react";
const students = [
  { id: 111, name: "张三", score: 99 },
  { id: 112, name: "张三风", score: 98 },
  { id: 113, name: "张三冯", score: 91 },
  { id: 114, name: "张三封", score: 88 },
];
const element = (
  <div>
    <h2>学生列表数据</h2>
    <div className="item">
      {students
        .filter((item) => item.score > 90)
        .map((item) => {
          return (
            <div className="item" key={item.id}>
              <h2>学号：{item.id}</h2>
              <h3>姓名: {item.name}</h3>
              <h1>分数: {item.score}</h1>
            </div>
          );
        })}
    </div>
  </div>
);
class TaskList extends React.Component {
  render() {
    return element;
  }
}

export default TaskList;
