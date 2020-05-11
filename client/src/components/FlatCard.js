import React from "react";

const FlatCard = () => {
  return (
    <article className="flat-card">
      <div className="card-photo">
        <img
          src="https://dnvefa72aowie.cloudfront.net/origin/article/202005/f326399e82ca7c2284f53a8b776dd2cae9628a0367cdc0caa482dd2ed66d6b74.webp?q=82&s=300x300&t=crop"
          alt="자전거"
        />
      </div>
      <div className="article-info">
        <div className="article-title-content">
          <span className="article-title">
            여성용 자전거/바구니 자전거 삼천리자전거 24 프림로즈
          </span>
        </div>
        <p className="article-region-name">대구 수성구 수성동1가</p>
        <p className="article-price">66,000원</p>
        <section className="article-sub-info">
          <span className="article-watch">
            <img
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/like-8111aa74d4b1045d7d5943a901896992574dd94c090cef92c26ae53e8da58260.svg"
              alt="하트"
            />
            3
          </span>
        </section>
      </div>
    </article>
  );
};

export default FlatCard;
