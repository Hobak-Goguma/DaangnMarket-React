import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const testMap = [
  {
    img:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202005/0056cb36ca0acb1f557ddcd6982ee9067c2b4645482a56e8ea26c644487b5702.webp?q=82&amp;s=300x300&amp;t=crop",
  },
  {
    img:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202005/46bfd1d65675390613275894302d778281b5f6b2d940a266142bab534445df0c.webp?q=82&s=300x300&t=crop",
  },
  {
    img:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202005/a2fa1c989a6bdf10c07401e2c82d2c3efaf08c02d9347db4d00bb3fce61e7973.webp?q=82&s=300x300&t=crop",
  },
  {
    img:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202005/27696ef09e9af0f2ac1d1c4929ca9b111a28279282528668c0f34002150f6d2c.webp?q=82&s=300x300&t=crop",
  },
  {
    img:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202005/e394a599798e7108efa02f989ed0202f0bfcd553670ab53487098aa727b489c7.webp?q=82&s=300x300&t=crop",
  },
];

const RecordsDetail = () => {
  return (
    <RecordsDetailWrapper>
      <div className="user-filter">
        <ul>
          <li className="active">판매 물품(5)</li>
          <li>거래 후기(15)</li>
          <li>매너 칭찬</li>
        </ul>
      </div>
      <div className="user-records">
        <div className="cards-wrap">
          {testMap.map((v, i) => (
            <article className="card" key={i}>
              <Link className="card-link" to="#/">
                <div className="card-photo">
                  <img
                    alt="입문용기타/슬림바디/얇은 통기타/aosen기타/핸드메이드 기타/앰프기타"
                    src={v.img}
                  />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">
                    입문용기타/슬림바디/얇은 통기타/aosen기타/핸드메이드
                    기타/앰프기타
                  </h2>
                  <div className="card-region-name">대구 수성구 수성동1가</div>
                  <div className="card-price">75,000원</div>
                  <div className="card-counts">
                    <span>관심 4</span> ∙ <span>채팅 1</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </RecordsDetailWrapper>
  );
};

export default RecordsDetail;

const RecordsDetailWrapper = styled.div`
  .user-filter {
    margin-top: 20px;
    margin-bottom: 20px;

    ul {
      border-bottom: 1px solid #e9ecef;

      li {
        display: inline-block;
        font-size: 17px;
        padding: 8px 20px;
        cursor: pointer;

        &.active {
          border-bottom: 3px solid #f76707;
          color: #f76707;
          font-weight: 600;
        }
      }
    }
  }

  .user-records {
    position: relative;
    padding-top: 20px;

    .cards-wrap {
      margin: 0 auto;
      text-align: center;

      .card {
        position: relative;
        text-align: left;
        display: inline-block;
        border-radius: 8px;
        border: 1px solid #e9ecef;
        margin-bottom: 40px;
        width: calc(33% - 16px);
        margin-right: 16px;

        :hover {
          box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
          top: -2px;
        }

        .card-link {
          color: #212529;
          text-decoration: none;

          .card-photo {
            width: 100%;
            position: relative;
            height: 160px;
            overflow: hidden;
            border-radius: 8px 8px 0 0;
            background: #f8f9fa;

            img {
              width: 100%;
              position: relative;
              left: 50%;
              transform: translate(-50%, 0);
            }
          }

          .card-desc {
            padding: 16px;
            padding-bottom: 0;

            .card-title {
              font-size: 17px;
              font-weight: 600;
              letter-spacing: -0.6px;
              color: #212529;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              margin-bottom: 6px;
              line-height: 1.2;
            }

            .card-region-name {
              font-size: 15px;
              color: #868e96;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              margin-bottom: 8px;
              line-height: 1.3;
            }

            .card-price {
              font-size: 15px;
              font-weight: 600;
              padding-bottom: 8px;
              border-bottom: 1px solid #e9ecef;
              line-height: 1.3;
              color: #ff8a3d;
            }

            .card-counts {
              padding: 12px 0;
              color: #adb5bd;
              font-size: 13px;
            }
          }
        }
      }
    }
  }
`;
