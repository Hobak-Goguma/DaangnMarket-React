import React, { useState, useRef } from "react";
import { UploadWrapper, File, UploadBtn, ErrorMessage } from "./style";
import Dropzone from "./Dropzone";
import { ReactSortable } from "react-sortablejs";

const Upload = ({
  onSubmit,
  image,
  typeError,
  onDrop,
  title,
  onTitleChange,
  category,
  onCategoryChange,
  categoryOptions,
  price,
  onPriceChange,
  description,
  onDescriptionChange,
  error,
  isEdit,
  dropFinished,
  imageData,
  imageCount,
  setImageData,
}) => {
  const handleDelete = (idx) => {
    const temp = [...imageData];

    temp.splice(idx, 1);
    setImageData(temp);
  };

  const renderImages = () => {
    return imageData.map((file, i) => (
      <div style={{ position: "relative" }} key={i}>
        <span className="delete" onClick={() => handleDelete(i)}>
          &times;
        </span>
        <img src={file} alt="사진" />
      </div>
    ));
  };

  return (
    <UploadWrapper>
      <h5>{isEdit ? "상품 수정" : "중고거래 상품 등록"}</h5>
      <form onSubmit={onSubmit} className="form-control">
        <File>
          <Dropzone onDrop={onDrop} imageCount={imageCount} />
          <ReactSortable
            className="sortable"
            list={imageData}
            setList={setImageData}
            animation={150}
          >
            {dropFinished && renderImages().slice(0, 10)}
          </ReactSortable>
        </File>
        {typeError && <ErrorMessage>{typeError}</ErrorMessage>}
      </form>
      <div className="title">
        <input
          type="text"
          className="form"
          placeholder="제품 이름을 입력해주세요"
          value={title}
          onChange={onTitleChange}
        />
      </div>
      <div className="category">
        <select
          className="form"
          style={{ width: 705 }}
          // value={category || "default"}
          // onChange={onCategoryChange}
        >
          <option value={"default"} disabled>
            카테고리를 선택해주세요.
          </option>
          {categoryOptions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="price">
        <input
          type="text"
          className="form"
          value={price}
          onChange={onPriceChange}
          placeholder="가격을 입력해주세요.(￦)"
        />
      </div>
      <div className="description">
        <textarea
          className="form"
          value={description}
          onChange={onDescriptionChange}
          placeholder="제품 설명을 작성해주세요."
          style={{ height: 250 }}
        />
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <UploadBtn text={`상품 ${isEdit ? "수정" : "등록"}하기`} />
    </UploadWrapper>
  );
};

export default Upload;
