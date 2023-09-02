import React from "react";
import "./FileUpload.css";

function FileUpload({ saveFile }) {
  function changeHandler(e) {
    saveFile(e.target.files[0]);
  }

  return (
    <React.Fragment>
      <form>
        <div className=" input">
        <input
          type="file"
          name="Upload PDF File "
          onChange={changeHandler}
        ></input>
        </div>
      </form>
    </React.Fragment>
  );
}
export default FileUpload;
