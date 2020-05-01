import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <ul className="footer-list">
        <li className="footer-list-item">이용약관</li>
        <li className="footer-list-item">개인정보처리방침</li>
        <li className="footer-list-item">위치기반서비스 이용약관</li>
        <li className="footer-list-item">광고주센터</li>
        <li className="footer-list-item">ABOUT US</li>
      </ul>
      <ul className="footer-list footer-address-list">
        <li className="footer-list-item">사업자 등록번호 : 375-87-00088</li>
        <li className="footer-list-item">
          서울특별시 서초구 서초대로 396 강남빌딩 17층 1707호
        </li>
        <li className="footer-list-item">
          <p>고객문의: cs@daangnservice.com</p>
          <p>제휴문의: contact@daangn.com</p>
        </li>
      </ul>
      <p className="ceo">(주)당근마켓 클론 대표 조원상</p>
      <div className="copyright">
        Copyright © Danggeun Market Clone. All rights reserved.
      </div>
      <div className="social">
        <ul className="footer-list">
          <li className="footer-list-item">
            <i className="fab fa-facebook"></i>
          </li>
          <li className="footer-list-item">
            <i className="fab fa-instagram"></i>
          </li>
          <li className="footer-list-item">
            <i className="fab fa-github"></i>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding: 40px 0 67px 0;
  background-color: #495057;
  color: #dee2e6;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: -0.6px;
  text-align: center;
  z-index: 100;

  .copyright {
    color: #868e96;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.6;
    letter-spacing: -0.6px;
    margin: 8px 0;
  }

  .footer-list {
    margin: 24px 0;

    &-item {
      display: inline-block;
      color: #dee2e6;

      &:not(:last-child):after {
        content: "|";
        margin: 0 16px;
        color: #868e96;
        font-weight: normal;
      }
    }
  }

  .footer-address-list {
    margin-bottom: 4px;
    font-weight: 200;

    .footer-list-item:last-child {
      vertical-align: top;
    }

    .footer-list-item:last-child p {
      margin-bottom: -4px;
    }
  }

  .social {
    i {
      font-size: 36px;
    }
    .footer-list-item:after {
      content: "";
      margin: 0 16px;
    }
  }
`;
