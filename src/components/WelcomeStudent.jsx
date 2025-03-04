import React from "react";

const WelcomeStudent = ({ name, age, avatar }) => {
  return (
    <div>
      <h1>学生姓名: {name}</h1>
      <h2>年龄: {age}</h2>
      <img
        src={avatar}
        alt="学生头像"
        style={{ width: "10px", height: "10px" }}
      />
    </div>
  );
};

export default WelcomeStudent;
