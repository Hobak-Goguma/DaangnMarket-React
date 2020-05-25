import React from "react";
import styled from "styled-components";
import ProfileSection from "./ProfileSection";
import RecordsDetail from "./RecordsDetail";

const OtherUser = () => {
  return (
    <OtherUserWrapper>
      <ProfileSection />
      <RecordsDetail />
    </OtherUserWrapper>
  );
};

export default OtherUser;

const OtherUserWrapper = styled.div`
  width: 677px;
  margin: 120px auto 0 auto;
`;
