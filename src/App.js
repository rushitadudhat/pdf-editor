import { useEffect, useState } from "react";
import "./App.css";
import FileUpload from "./FileUpload/FileUpload";
import PdfViewerComponent from "./PdfViewer/pdfViewer";

function App() {
  const [pdfFile, setpdfFile] = useState("");

  function fileSave(saveFile) {
    setpdfFile(saveFile);
  }

  useEffect(() => {
    console.log(pdfFile);
  }, [pdfFile]);
  return (
    <div>
      {!pdfFile && <FileUpload saveFile={fileSave}></FileUpload>}
      {pdfFile && (
        <PdfViewerComponent
          document={URL.createObjectURL(pdfFile)}
          openDocument={fileSave}
        ></PdfViewerComponent>
      )}
    </div>
  );
}

export default App;
