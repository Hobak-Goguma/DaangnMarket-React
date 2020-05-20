import React, { useState, useEffect, useCallback } from "react";
import Upload from "../components/Upload";
import { withRouter } from "react-router-dom";

const UploadContainer = ({ history }) => {
  const [typeError, setTypeError] = useState(null);
  const [error, setError] = useState(null);
  const [imageData, setImageData] = useState([]);
  const [isDropFinished, setIsDropFinished] = useState(false);

  const categoryOptions = [
    { value: 1, label: "가구/인테리어" },
    { value: 2, label: "유아동/유아도서" },
    { value: 3, label: "생활/가공식품" },
    { value: 4, label: "여성의류" },
    { value: 5, label: "여성잡화" },
    { value: 6, label: "뷰티/미용" },
    { value: 7, label: "남성패션/잡화" },
    { value: 8, label: "스포츠/레저" },
    { value: 9, label: "게임/취미" },
    { value: 10, label: "도서/티켓/음반" },
    { value: 11, label: "반려동물용품" },
    { value: 12, label: "디지털/가전" },
    { value: 13, label: "기타 중고물품" },
  ];

  const onDrop = useCallback(async (files) => {
    setIsDropFinished(true);
    files.map((file) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageData((prevState) => [
          ...prevState,
          imageData.concat(reader.result),
        ]);
      });
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <Upload
      typeError={typeError}
      onDrop={onDrop}
      dropFinished={isDropFinished}
      categoryOptions={categoryOptions}
      error={error}
      imageData={imageData}
      setImageData={setImageData}
    />
  );
};

export default withRouter(UploadContainer);
