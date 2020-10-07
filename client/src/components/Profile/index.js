import React from "react";
import styled from "styled-components";

const Profile = styled.div`
  display: flex;

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
`;



const DetailProfile = ({children:user}) =>{
    return (
      <Profile>
        <div className="article-profile-image">
          <img
            src={user.img}
            alt={user.name}
          />
        </div>
        <div className="article-profile-left">
          <div className="nickname">{user.nickname}</div>
          <div className="region-name">{user.addr}</div>
        </div>
      </Profile>);
}


export default DetailProfile;