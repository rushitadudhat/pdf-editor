import { useEffect, useState } from "react";
import "./App.css";
import FileUpload from "./FileUpload/fileUpload";

function App() {
  const [pdfFile, setpdfFile] = useState();

  function fileSave(saveFile) {
    setpdfFile(saveFile);
  }
  useEffect(() => {
    console.log(pdfFile);
  }, [pdfFile]);
  return (
    <div>
      <FileUpload saveFile={fileSave}></FileUpload>
    </div>
  );
}

export default App;
