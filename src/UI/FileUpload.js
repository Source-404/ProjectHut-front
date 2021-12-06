import React from "react";
import reactDom from "react-dom";
import classes from "./FileUpload.module.css";
import { useState } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  const [file, setFile] = useState(null);

  const submitFile = (e) => {
    e.preventDefault();

    console.log(file);

    props.onConfirm();
  };
  return (
    <div className={classes.modal}>
      <div className={classes.header}>
        <h2>Upload File</h2>
      </div>
      <form encType="multipart/form-data" onSubmit={submitFile}>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <button onClick={submitFile}>Upload</button>
      </form>
    </div>
  );
};

export default function FileUpload(props) {
  if (!props.ready) return null;
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {reactDom.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
