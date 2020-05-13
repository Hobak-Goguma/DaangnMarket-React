import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

const FlatCard1 = (props) => {
  const handleCardClick = (event, id) => {
    event.preventDefault();
    props.history.push(`/articles:${id}`);
  };

  return (
    <>
      {props.data.map((v, i) => (
        <article
          className="flat-card"
          key={i}
          onClick={(e) => handleCardClick(e, i)}
        >
          <div className="card-photo">
            <img src={v.img} alt="자전거" />
          </div>
          <div className="article-info">
            <div className="article-title-content">
              <span className="article-title">{v.title}</span>
            </div>
            <p className="article-region-name">{v.region_name}</p>
            <p className="article-price">{v.price}</p>
            <section className="article-sub-info">
              <span className="article-watch">
                <img
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/like-8111aa74d4b1045d7d5943a901896992574dd94c090cef92c26ae53e8da58260.svg"
                  alt="하트"
                />
                0
              </span>
            </section>
          </div>
        </article>
      ))}
    </>
  );
};

export default withRouter(FlatCard1);
