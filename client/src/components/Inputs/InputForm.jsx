import React from "react";
import TextField from "@mui/material/TextField";

const InputForm = ({ idInput, labelInput, typeInput, classN }) => {
  console.log(classN);
  const handleChange = () => {
    console.log("Evento del Input TextField");
  };

  return (
    <div>
      <TextField
        className={classN}
        required
        autoFocus
        id={idInput}
        label={labelInput}
        type={typeInput}
        defaultValue=""
        variant="outlined"
      />
    </div>
  );
};

export default InputForm;
