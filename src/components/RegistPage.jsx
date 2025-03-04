import RegistForm from "./RegistForm";
import { useState } from "react";

const RegistPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    setSubmittedData({ name, email });
  };

  const renderInput = (type, onChange, placeholder) => (
    <>
      <RegistForm
        type={type}
        onInputChange={onChange}
        placeholder={placeholder}
      />
      <p></p>
    </>
  );

  return (
    <div>
      <h1>用户注册</h1>
      {renderInput("text", setName, "请输入用户名")}
      {renderInput("email", setEmail, "请输入邮箱")}
      <button onClick={handleSubmit}>提交</button>

      {submittedData && (
        <div>
          <h2>提交数据:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default RegistPage;
