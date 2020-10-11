import React from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";

const DropZone = ({ onDrop, imageCount }) => {
  return (
    <Dropzone onDrop={onDrop} multiple={true}>
      {({ getRootProps, getInputProps }) => (
        <DropzoneWrapper {...getRootProps()}>
          <input {...getInputProps()} multiple />
          <i
            className="fas fa-camera fa-2x"
            style={{ marginBottom: 8, color: "gray" }}
          ></i>
          <p>{imageCount}/10</p>
        </DropzoneWrapper>
      )}
    </Dropzone>
  );
};

export default DropZone;

const DropzoneWrapper = styled.div`
  margin-left: 10px;
  width: 130px;
  height: 130px;
  border: 1px solid #e9ecf3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
    color: #6c757d;
    font-size: 1rem;
  }
`;
