import React from "react";
// Import the useDropzone hooks from react-dropzone
import { useDropzone } from "react-dropzone";
import uploadimg from "../../assets/images/uploadimage.png"


import "./dropzone.scss"

const Dropzone = ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  /* 
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */

  return (
    <div className="dropzone-div" {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
            <p className="dropzone-content">Release to drop the files here</p>

        ) : (
            <div className="drag-text">
                <img src={uploadimg} alt="" />
                <p>Add image</p>
                <p className='textt'>Drag and drop a file or select add Image</p>
                                
            </div>
        )}
      </div>
    </div>
  );
};

export default Dropzone;