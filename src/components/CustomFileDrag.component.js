import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const CustomFileDrag = ({ getData, data }) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  let images =
    !data || files[0] !== undefined ? (
      files.map((file) => (
        <div key={file.name}>
          <div>
            <img src={file.preview} className="upload-image" alt="preview" />
          </div>
          {getData(file)}
        </div>
      ))
    ) : data !== undefined ? (
      <div key={data}>
        <div>
          <img src={data} className="upload-image" alt="preview" />
        </div>
      </div>
    ) : null;

  return (
    <div className="file-drag">
      <div className="drop-area" {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and Drop</p>
        <div className="img">{images}</div>
      </div>
    </div>
  );
};

export default CustomFileDrag;
