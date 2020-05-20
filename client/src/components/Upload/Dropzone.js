import React from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";

const DropZone = ({ onDrop }) => {
  return (
    <Dropzone onDrop={onDrop} multiple={true}>
      {({ getRootProps, getInputProps }) => (
        <DropzoneWrapper {...getRootProps()}>
          <input {...getInputProps()} multiple />
          <p>
            사진을 드래그 하거나 <br /> 이곳을 클릭하여 선택하세요. <br />
            (최대 10개)
          </p>
          <i className="fas fa-plus fa-2x" style={{ marginTop: 8 }}></i>
        </DropzoneWrapper>
      )}
    </Dropzone>
  );
};

export default DropZone;

const DropzoneWrapper = styled.div`
  margin-left: 10px;
  width: 150px;
  height: 150px;
  border: 1px solid #e9ecf3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
    color: #6c757d;
    font-size: 0.7rem;
  }
`;
