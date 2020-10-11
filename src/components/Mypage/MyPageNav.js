import React from 'react';
import styled from 'styled-components';

const Mynav = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  width: 140px;
  li {
    box-sizing: border-box;
    width: 100%;
    line-height: 50px;
    letter-spacing: -0.43px;
    border: 1px solid #ccc;
    border-top: 0;
    background: #fff;
    cursor: pointer;
    :first-child {
      border-top: 1px solid #ccc;
    }
    span {
      display: block;
      padding: 5px 16px;
      position: relative;
      font-size: 14px;
      i {
        display: block;
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  li.on {
    color: #ffffff;
    background: #56c271;
  }
`;
const MyNav = ({ choose, router }) => {
  const click = (v) => {
    const id = v.target.id;
    switch (id) {
      case '내 정보':
        router.push('/myinfo');
        break;
      case '내 상품':
        router.push('/myproduct');
        break;
      case '주소 변경':
        router.push('/address');
        break;
      case '로그아웃':
        window.sessionStorage.clear();
        router.push('/');
        break;
      default:
        break;
    }
  };
  const myMenu = ['내 정보', '내 상품', '주소 변경', '로그아웃'];
  const menu = myMenu.map((v) => {
    if (v === choose) {
      return (
        <li key={v} className="on">
          <span id={v} onClick={click}>
            {v}
            <i className="fas fa-chevron-right"></i>
          </span>
        </li>
      );
    } else {
      return (
        <li key={v}>
          <span id={v} onClick={click}>
            {v}
            <i className="fas fa-chevron-right"></i>
          </span>
        </li>
      );
    }
  });
  return <Mynav>{menu}</Mynav>;
};

export default MyNav;
