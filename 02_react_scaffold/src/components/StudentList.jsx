import React, { useState } from "react";

const students = [
  { id: 111, name: "张三", score: 99 },
  { id: 112, name: "张三风", score: 98 },
  { id: 113, name: "张三冯", score: 91 },
  { id: 114, name: "张三封", score: 88 },
];

const StudentList = () => {
  const [filterScore, setFilterScore] = useState(90);

  const handleFilterChange = (event) => {
    setFilterScore(Number(event.target.value));
  };

  const filteredStudents = students.filter(
    (student) => student.score > filterScore
  );

  return (
    <div>
      <h2>学生列表数据</h2>
      <div>
        <label>
          筛选分数大于:
          <input
            type="number"
            value={filterScore}
            onChange={handleFilterChange}
          />
        </label>
      </div>
      <div className="item">
        {filteredStudents.map((student) => (
          <div className="item" key={student.id}>
            <h2>学号：{student.id}</h2>
            <h3>姓名: {student.name}</h3>
            <h1>分数: {student.score}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
