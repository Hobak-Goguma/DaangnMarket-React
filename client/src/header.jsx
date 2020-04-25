import React from 'react';
import styled from 'styled-components';
const Header = () =>{
    const Headers = styled.header`
        border-bottom: 1px solid #ccc;
        .container{
            position: relative;
            width: 980px;
            margin : 0 auto;
            img{
                padding : 10px 0;
                width: 132px;
            }
            div{
                display:inline-block;
            }
            .inputBox{
                padding :10px;
                border: 1px solid #ccc;
                border-radius:5px;
                input{
                    font-size:20px;
                    border:0;
                }
                label{
                    img{
                        padding : 0;
                        width: 26px;
                    }
                }
            }
            section{
                position: absolute;
                top:50%;
                right :0;
                transform: translateY(-50%);
                div{
                    width: 150px;
                    border:1px solid #ccc;
                    border-radius:25px;
                    text-align:center;
                    height:50px;
                    position:relative;
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

    return(<Headers>
        <div className="container">
            <img src="./img/logo.svg" alt="로고"/>
            <div className="inputBox">
                <input type="text" name="search" id="searchItem"/>
                <label htmlFor="searchItem">
                    <img src="./img/search-icon.svg" alt="search"/>
                </label>
            </div>
            <section>
                <div className="signIn"><span>회원가입</span></div>
                <div className="logIn"><span>로그인</span></div>
            </section>
        </div>
    </Headers>);
}

export default Header;