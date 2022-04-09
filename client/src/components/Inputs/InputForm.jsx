import React from "react";

const InputForm = ({ idInput, labelInput, typeInput, classN }) => {
  const handleChange = () => {
    console.log("Evento del Input TextField");
  };

  return (
    <div>
      <input
        id={idInput}
        type={typeInput}
        name="full-name"
        placeholder={labelInput}
        className={classN}
        autoComplete="off"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputForm;
