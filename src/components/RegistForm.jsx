const RegistForm = ({ type, onInputChange, placeholder }) => {
  return (
    <input
      type={type}
      onChange={(e) => onInputChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default RegistForm;
