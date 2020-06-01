import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Tabs from "./Tab/Tabs";
import Tab from "./Tab/Tab";

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

const testMap2 = [
  {
    img:
      "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png",
  },
  {
    img:
      "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png",
  },
  {
    img:
      "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png",
  },
  {
    img:
      "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png",
  },
  {
    img:
      "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png",
  },
  {
    img:
      "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png",
  },
  {
    img:
      "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png",
  },
  {
    img:
      "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png",
  },
  {
    img:
      "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png",
  },
  {
    img:
      "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png",
  },
];

const testMap3 = [
  {
    detail: "응답이 빨라요.",
    count: 32,
  },
  {
    detail: "시간 약속을 잘 지켜요.",
    count: 31,
  },
  {
    detail: "친절하고 매너가 좋아요.",
    count: 28,
  },
  {
    detail: "제가 있는 곳까지 와서 거래했어요.",
    count: 24,
  },
  {
    detail: "좋은 상품을 저렴하게 판매해요.",
    count: 6,
  },
  {
    detail: "무료로 나눠주셨어요.",
    count: 4,
  },
  {
    detail: "상품설명이 자세해요.",
    count: 3,
  },
  {
    detail: "상품상태가 설명한 것과 같아요",
    count: 3,
  },
];

const RecordsDetail = () => {
  return (
    <RecordsDetailWrapper>
      <div className="user-filter">
        <Tabs selected={0}>
          <Tab title="판매 물품(5)">
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
                        <div className="card-region-name">
                          대구 수성구 수성동1가
                        </div>
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
          </Tab>
          <Tab title="거래 후기(10)">
            <div className="user-records">
              <ul>
                {testMap2.map((v, i) => (
                  <li className="review" key={i}>
                    <div className="review-profile-photo">
                      <img src={v.img} alt="img" />
                    </div>
                    <div className="review-writer-nickname">
                      <span>뿌니</span>
                    </div>
                    <div className="review-writer-region-name">
                      해운대구 중동
                    </div>
                    <div className="review-content">잘사용하세요.~^^</div>
                    <time className="review-time">9일전</time>
                  </li>
                ))}
              </ul>
            </div>
          </Tab>
          <Tab title="매너 칭찬">
            <div className="user-records" style={{ paddingBottom: 30 }}>
              <ol>
                {testMap3.map((v, i) => (
                  <li className="manner" key={i}>
                    <p className="manner-content"> {v.detail}</p>
                    <p className="manner-count">{v.count}명</p>
                  </li>
                ))}
              </ol>
            </div>
          </Tab>
        </Tabs>
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

        &.selected {
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

    ol {
      counter-reset: item;
      .manner {
        list-style: none;
        counter-increment: item;
        position: relative;
        padding: 16px 0;
        border-bottom: 1px solid #e9ecef;

        ::before {
          display: inline-block;
          font-size: 15px;
          font-weight: 600;
          content: counter(item) ".";
        }
        .manner-content {
          margin-left: 4px;
          display: inline-block;
          font-size: 15px;
        }
        .manner-count {
          position: absolute;
          font-size: 15px;
          font-weight: 600;
          right: 0;
          top: 16px;
        }
      }
    }

    ul {
      li.review {
        padding: 16px 0;
        border-bottom: 1px solid #e9ecef;
        position: relative;
        display: block;

        .review-profile-photo {
          display: inline-block;
          vertical-align: middle;
          img {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            object-fit: cover;
          }
        }
        .review-writer-nickname {
          display: inline-block;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.47;
          letter-spacing: -0.5px;
          vertical-align: middle;
          margin-right: 8px;
          margin-left: 8px;
        }
        .review-writer-region-name {
          display: inline-block;
          font-size: 13px;
          line-height: 1.46;
          letter-spacing: -0.5px;
          vertical-align: middle;
        }
        .review-content {
          padding-top: 8px;
          font-size: 15px;
          line-height: 1.47;
          letter-spacing: -0.5px;
          width: calc(100% - 80px);
        }
        .review-time {
          display: block;
          font-size: 13px;
          line-height: 1.46;
          letter-spacing: -0.5px;
          color: #868e96;
          margin-top: 8px;
        }
      }
    }

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
