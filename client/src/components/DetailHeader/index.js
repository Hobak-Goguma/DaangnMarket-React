import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DetailProfile from "./Profile/index.js"
import Temper from "./Temper/index.js";

const DetailHeader = () => {
  const user = {
    name : "이대성강사",
    nickname : "이대성강사",
    addr : "수성구 수성동1가",
    img : "https://dnvefa72aowie.cloudfront.net/origin/profile/201808/2d18062dcc583f144bc91cd727a1746bc993d5462b0538a3779e00d1fdc8d734.jpg?q=82&s=640x640&t=crop",
    temper : "38.2",
  }



  return (
    <Header>
      <div to="/#" className="article-profile-link">
        <div className="space-between">
          <Link to="/user">
            <DetailProfile>{user}</DetailProfile>
          </Link>
            <Temper>{user}</Temper>
        </div>
      </div>
    </Header>
  );
};

export default DetailHeader;

const Header = styled.section`
  width: 677px;
  margin: 0 auto;

  .article-profile-link {
    display: block;
    margin-top: 25px;
    padding-bottom: 23px;
    position: relative;
    border-bottom: 1px solid #e9ecef;

    .space-between {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .article-profile-image {
        display: inline-block;
        img {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: 50%;
        }
      }

      .article-profile-left {
        display: inline-block;
        margin-left: 8px;

        .nickname {
          font-size: 15px;
          line-height: 1.5;
          letter-spacing: -0.6px;
          color: #212529;
        }

        .region-name {
          font-size: 13px;
          line-height: 1.46;
          letter-spacing: -0.6px;
          color: #212529;
        }
      }
    }

    
  }
`;
