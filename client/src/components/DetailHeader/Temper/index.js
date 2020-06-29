import React from "react";
import styled from "styled-components";

const UserTempers = styled.div`
      position: absolute;
      right: 0;
      padding-right: 36px;

      .meters {
        clear: both;
        display: block;
        width: 100px;
        background-color: #e9ecef;
        height: 4px;
        border-radius: 100px;
        position: relative;
        margin-top: 24px;

        .bar {
          background-color: #319e45;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          height: 4px;
          border-radius: 100px;
        }
      }

      .face.face-04 {
        position: absolute;
        right: 0;
        top: 0;
        background: url("https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/face-icon-set@2x-0bece009c619b4706f52a750aca82448334aa3e39d353579f2ce9c365639a03b.png")
          no-repeat;
        background-position: 0 -99px;
        background-size: 29px 147px;
        width: 24px;
        height: 24px;
      }

      dl.temperature-wrap {
        display: block;
        width: 100px;

        dt {
          position: absolute;
          top: 36px;
          right: 0;
          font-size: 12px;
          line-height: 1;
          letter-spacing: -0.6px;
          color: #868e96;
        }

        dd.text-color-04 {
          color: #319e45;
          position: absolute;
          right: 30px;
          font-size: 16px;
          font-weight: bold;
          line-height: 1;
          letter-spacing: -0.5px;
          margin-top: 1px;
        }
      }
    
`;


const Temper = ({children:user}) =>{
    return(<UserTempers>
        <dl className="temperature-wrap">
            <dt>매너온도</dt>
            <dd className="text-color-04">{user.temper}°C</dd>
        </dl>
        <div className="meters">
            <div className="bar bar-color-04" style={{ width: user.temper+"%" }}></div>
        </div>
        <div className="face face-04"></div>
    </UserTempers>)
}


export default Temper;