import React from "react";
import "./FileUpload.css";

function FileUpload({ saveFile }) {
  function changeHandler(e) {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
      // you can use this method to get file and perform respective operations
      let files = Array.from(input.files);
      console.log(files);
      saveFile(files[0]);
    };
    input.click();
  }

  return (
    <React.Fragment>
      <div className="input">
        <div className="button">
          <input
            type="button"
            onClick={changeHandler}
            value="Upload Document"
            className="input-button"
          ></input>
        </div>
        </div>
      
    </React.Fragment>
  );
}
export default FileUpload;
