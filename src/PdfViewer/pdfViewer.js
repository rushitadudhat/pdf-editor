import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current; // This `useRef` instance will render the PDF.

    let PSPDFKit, instance;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      PSPDFKit.unload(container); // Ensure that there's only one PSPDFKit instance.

      instance = await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container,
        // The document to open.
        document: props.document,
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        toolbarItems: [
          { type: "content-editor" },
          {
            type: "custom",
            id: "open-new",
            title: "Open Document",
            onPress: (event) => {
              let input = document.createElement("input");
              input.type = "file";
              input.onchange = (_) => {
                // you can use this method to get file and perform respective operations
                let files = Array.from(input.files);
                console.log(files);
                props.openDocument(files[0])
              };
              input.click();
            },
          },
          ...PSPDFKit.defaultToolbarItems,
        ],
      });
    })();
    return () => PSPDFKit && PSPDFKit.unload(container);
  }, [props.document]);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
