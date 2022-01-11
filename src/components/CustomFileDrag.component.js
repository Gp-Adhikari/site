import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const CustomFileDrag = ({ getData, data }) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "application/pdf",
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
    <>
      <div className="file-drag">
        <div className="drop-area" {...getRootProps()}>
          <input {...getInputProps()} />
          <div className="img">{images}</div>
          <p>Drag and Drop</p>
        </div>
      </div>

      <p className="or">OR</p>

      <input
        type="file"
        id="selectedFile"
        style={{ display: "none" }}
        accept="application/pdf"
        onChange={(e) => {
          // getData(e.target.files[0]);
          setFiles([
            Object.assign(e.target.files[0], {
              preview: URL.createObjectURL(e.target.files[0]),
            }),
          ]);
        }}
      />

      <input
        className="choose-file"
        type="button"
        value="Choose File"
        onClick={() => document.getElementById("selectedFile").click()}
      />
    </>
  );
};

export default CustomFileDrag;
