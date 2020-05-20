import React from "react";
import styled from "styled-components";

const ProfileSection = () => {
  return (
    <ProfileSectionWrapper>
      <h2 className="nick-name">
        이대성강사
        <span className="region-name">수성구 수성동1가</span>
      </h2>
      <div className="profile-detail">
        <p className="profile-detail-title">
          매너온도 <span className="profile-detail-count">38.2°C</span>
        </p>
      </div>
      <div className="profile-image">
        <img
          alt="이대성강사"
          src="https://dnvefa72aowie.cloudfront.net/origin/profile/201808/2d18062dcc583f144bc91cd727a1746bc993d5462b0538a3779e00d1fdc8d734.jpg?q=82&amp;s=640x640&amp;t=crop"
        />
      </div>
    </ProfileSectionWrapper>
  );
};

export default ProfileSection;

const ProfileSectionWrapper = styled.section`
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;

  .nick-name {
    text-align: left;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.6px;
    margin-bottom: 10px;
    vertical-align: middle;
    margin-left: 80px;

    .region-name {
      font-size: 17px;
      color: #212529;
      font-weight: normal;
      vertical-align: middle;
      margin-left: 6px;
    }
  }

  .profile-detail {
    margin: 10px 0;
    margin-left: 80px;

    .profile-detail-title {
      display: inline-block;
      margin-right: 20px;
      font-size: 15px;
      letter-spacing: -0.6px;
      color: #868e96;

      .profile-detail-count {
        font-weight: 600;
        margin-left: 4px;
      }
    }
  }

  .profile-image {
    position: absolute;
    top: 0;
    left: 0;

    img {
      width: 58px;
      height: 58px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;
