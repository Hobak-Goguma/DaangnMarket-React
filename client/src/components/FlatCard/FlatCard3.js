import React, { useEffect, useState } from "react";

const FlatCard3 = (props) => {
  const [cardData, setCardData] = useState([]);
  // console.log(decodeURI(window.location.href.split("=")[1]));

  useEffect(() => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        setCardData(res.card_data3);
      });
  }, []);

  return (
    <>
      {cardData.map((v) => (
        <>
          <article className="business-article">
            <div className="article-photo">
              <img src={v.img} alt="자전거" />
            </div>
            <div className="article-desc">
              <div className="article-title-content">
                <span className="article-title">{v.title}</span>
                <span className="article-content">{v.content}</span>
              </div>
              <p className="article-region-name">{v.region_name}</p>
              <p className="article-price">{v.price}</p>
              <div className="article-sub-info">
                <span className="article-comment">
                  <img
                    src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/message-78e946f283b8e1e127133cbdc4195faaed6bd0e45cf697eb3430030d40329d38.svg"
                    alt="챗"
                  />
                  0
                </span>
                <span className="article-watch">
                  <img
                    src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/like-8111aa74d4b1045d7d5943a901896992574dd94c090cef92c26ae53e8da58260.svg"
                    alt="하트"
                  />
                  0
                </span>
              </div>
            </div>
          </article>
          <hr className="article-hr-border" />
        </>
      ))}
    </>
  );
};

export default FlatCard3;
