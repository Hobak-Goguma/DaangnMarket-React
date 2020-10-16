import React, { useCallback, useEffect, useState } from 'react';

import Upload from './index';

const UploadContainer: React.FC = () => {
  const [imageData, setImageData] = useState<any[]>([]);
  const [imageCount, setImageCount] = useState(imageData.length);
  const [isDropFinished, setIsDropFinished] = useState(false);
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (imageData.length <= 10) {
      setImageCount(imageData.length);
    }
  }, [imageData.length]);

  const onPriceChange = (e) => {
    setPrice(e.target.value.replace(/[^0-9]/, ''));
  };

  const categoryOptions = [
    { value: 1, label: '가구/인테리어' },
    { value: 2, label: '유아동/유아도서' },
    { value: 3, label: '생활/가공식품' },
    { value: 4, label: '여성의류' },
    { value: 5, label: '여성잡화' },
    { value: 6, label: '뷰티/미용' },
    { value: 7, label: '남성패션/잡화' },
    { value: 8, label: '스포츠/레저' },
    { value: 9, label: '게임/취미' },
    { value: 10, label: '도서/티켓/음반' },
    { value: 11, label: '반려동물용품' },
    { value: 12, label: '디지털/가전' },
    { value: 13, label: '기타 중고물품' },
  ];

  const fetchProductData = (e) => {
    // let realImage = imageData.reduce((result, item) => {
    //   return `${result}${item}`;
    // }, "");
    // e.preventDefault();
    // const imageSlice = imageData[0].slice(0, 64);
    // fetch(`${API}product`, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     id_member: 1,
    //     name: "아이",
    //     price: 6000,
    //     info: "아니라는거 ",
    //     category: "시계",
    //     img: imageSlice,
    //   }),
    // }).then((res) => {
    //   if (res.status === 200) {
    //     alert("제품등록 완료");
    //   } else {
    //     alert("이상하네");
    //   }
    // });
    // console.log(imageData[0][0]);
  };

  const onDrop = useCallback(
    async (files) => {
      setIsDropFinished(true);
      files.map((file) => {
        const reader = new FileReader();
        reader.addEventListener('load', (v) => {
          console.log('yogiyo', v);

          // TODO: 이 부분 오류나는데 callback 을 넘기지 않는 식으로 작업해야함
          // setImageData((prevState) => {
          //   console.log('vkdlf', prevState);
          //   console.log(imageData);
          //   return [...prevState, imageData.concat(reader.result)];
          // });
        });
        reader.readAsDataURL(file);
        return file;
      });
    },
    [setImageData, imageData]
  );
  return (
    <Upload
      onDrop={onDrop}
      dropFinished={isDropFinished}
      categoryOptions={categoryOptions}
      onPriceChange={onPriceChange}
      price={price}
      imageData={imageData}
      imageCount={imageCount}
      setImageData={setImageData}
      onSubmit={fetchProductData}
    />
  );
};

export default UploadContainer;
