import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

interface DropZoneProps {
  imageCount: number;
  onDrop: (files: any) => Promise<void>;
}

const StyledDropzoneWrapper = styled.div`
  margin-left: 10px;
  width: 130px;
  height: 130px;
  border: 1px solid #e9ecf3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImageCount = styled.p`
  text-align: center;
  color: #6c757d;
  font-size: 1rem;
`;

const DropZone: React.FC<DropZoneProps> = ({ onDrop, imageCount }) => {
  return (
    <Dropzone onDrop={onDrop} multiple={true}>
      {({ getRootProps, getInputProps }) => (
        <StyledDropzoneWrapper {...getRootProps()}>
          <input {...getInputProps()} multiple />
          <i
            className="fas fa-camera fa-2x"
            style={{ marginBottom: 8, color: 'gray' }}
          ></i>
          <StyledImageCount>{imageCount}/10</StyledImageCount>
        </StyledDropzoneWrapper>
      )}
    </Dropzone>
  );
};

export default DropZone;
