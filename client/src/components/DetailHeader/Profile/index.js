import React from "react";
import styled from "styled-components";

const DetailProfile = ({children:user}) =>{
    return (
        <div style={{ display: "flex" }}>
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
      </div>);
}


export default DetailProfile;