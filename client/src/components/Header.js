import React, { useState } from 'react';
import styled from 'styled-components';
import { Link  } from "react-router-dom";

const Headers = styled.header`
        width:100%;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        top:0;
        position:fixed;
        background-color: #fff;
        z-index:100;
        .container{
            img{
                display:inline-block;
                margin-top:12px;
                padding : 10px 0;
                width: 132px;
            }
            div{
                display:inline-block;
            }
            .inputBox{
                margin:20px 0 20px 20px;
                width: 470px;
                height:20px;
                position:relative;
                padding :12px;
                border: 1px solid #FF8A3D;
                border-radius:5px;
                input{
                    position: absolute;
                    top: 13px;
                    left:10px;
                    width:440px;
                    font-size:17px;
                    border:0;
                }
                label{
                    position:absolute;
                    top:10px;
                    right:10px;
                    img{
                        padding : 0;
                        width: 26px;
                        margin-top:0px;
                    }
                }
            }
            section{
                position: absolute;
                top:50%;
                right :0;
                transform: translateY(-50%);
                div{
                    width: 140px;
                    border:1px solid #FF8A3D;
                    border-radius:20px;
                    color:#FF8A3D;
                    font-weight:bold;
                    text-align:center;
                    height:40px;
                    position:relative;
                    &:hover{
                        background-color:#FF8A3D;
                        color:white;
                    }
                    span{
                        display:block;
                        position:absolute;
                        top:50%;
                        left:50%;
                        transform: translate(-50%,-50%);
                    }
                }
                div:first-child{
                    margin-right: 10px;
                }
            }
        }
    `;
const Header = () =>{
    const [logoff,setLogin] = useState(true);

    return(
    <Headers>
        <div className="container">
            <img src="./img/logo.svg" alt="로고"/>
            <div className="inputBox">
                <input type="text" name="search" id="searchItem" placeholder="지역, 상품, 업체등을 검색해보세요."/>
                <label htmlFor="searchItem">
                    <img src="./img/search-icon.svg" alt="search"/>
                </label>
            </div>
            {logoff?//로그인 여부확인
            (<section>
                <div className="signIn"><span>회원가입</span></div>
          <Link to="/login">
            <div className="logIn">
              <span>로그인</span>
            </div>
          </Link>
            </section>
            )://로그인이 아닐시 아래쪽 실행
            (<div>
                로그인 중입니다.
            </div>)}
        </div>
    </Headers>
  );
};

export default Header;
