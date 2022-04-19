import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const InputFileImg = () => {
  const handleUpLoadImg = (e) => {
    const fileImg = e.target.files;
  };

  return (
    <div>
      <div className="box-file" role="button" tabIndex="0">
        <input
          id="add-photo"
          type="file"
          accept="image/*"
          name="image[]"
          style={{ display: "none" }}
          onChange={handleUpLoadImg}
        />
        <label htmlFor="add-photo">
          <FontAwesomeIcon className="img-edit-reg" icon={faPenToSquare} />
        </label>
      </div>
    </div>
  );
};

export default InputFileImg;
