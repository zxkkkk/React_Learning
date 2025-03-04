import Input from "./Input";
import { useState } from "react";

const InputParent = () => {
  const [inputvalue, setInputValue] = useState("");

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <>
      <h2>输入的值是：{inputvalue}</h2>
      <Input onInputChange={handleInputChange} />
    </>
  );
};

export default InputParent;
