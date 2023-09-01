import React from "react";

function FileUpload({ saveFile }) {
  function changeHandler(e) {
    saveFile(e.target.files[0]);
  }

  return (
    <React.Fragment>
      <form>
        <input
          type="file"
          name="Upload PDF File "
          onChange={changeHandler}
        ></input>
      </form>
    </React.Fragment>
  );
}
export default FileUpload;
