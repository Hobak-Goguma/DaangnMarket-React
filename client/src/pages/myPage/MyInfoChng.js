import React from "react";
import styled from "styled-components";
import { Radio } from "@material-ui/core";

const InfoBox = styled.div`
    width:calc(100% - 250px);
    margin-left:250px;
    margin-top: 200px;
    .title{
        position:relative;
        border-bottom : 3px solid #ff8a3d;
        padding-bottom: 15px;
        span.tit{
            display:inline;
            font-size:26px;
            margin-right:15px;
        }
        .necessary{
            display:block;
            position:absolute;
            bottom:15px;
            right:0;
            font-size:13px;
        }
        .description{
            display:inline-block;
            font-size:13px;
        }
    }
    .InfoBasic,.InfoMore{
        margin-left:50px;
        margin-top:40px;
        margin-bottom:100px;
        >div{
            position:relative;
            height:45px;
            line-height:45px;
            input{
                border:1px solid #ccc;
                display: block;
                padding: 10px 7px;
                position: absolute;
                top:50%;
                left:150px;
                transform:translateY(-50%);
                width: 250px;
                border-radius:5px;
            }
            a{
                display:inline-block;
                position:absolute;
                right:100px;
                top:50%;
                transform:translateY(-50%);
                text-align:center;
                line-height:38px;
                height:38px;
                width:150px;
                border-radius:5px;
                background:#ff8a3d;
                color:#fff;
                text-decoration:none;
            }
            a.disable{
                background:#fff;
                color:#ccc;
                border:1px solid #ccc;
            }
        }
        .gender{
            >div{
                display: block;
                position: absolute;
                top:50%;
                transform:translateY(-50%);
                left:150px;
                padding-left:40px;
                >span{
                    position: absolute;
                    top:50%;
                    left:0;
                    transform:translateY(-50%);
                }
            }
            .male {
                left:150px;
            }
            .female {
                left:300px;
            }
        }
        .readonly{
            color:#ccc;
        }
        .birth{
            >div{
                width:266px;
                position:absolute;
                height:100%;
                top:50%;
                left:150px;
                transform:translateY(-50%);
                border:1px solid #ccc;
                text-align:center;
                span{
                    vertical-align:top;
                }
                .box{
                    display:inline-block;
                    width: calc(210px / 3);
                    height:100%;
                    vertical-align:middle;
                    margin-left:10px;
                    &:first-child{
                        margin-left:0px;
                    }
                    position:relative;
                    input{
                        position:absolute;
                        left:50%;
                        transform:translate(-50%,-50%);
                        width: calc(100% - 14px);
                        display:inline-block;
                        box-sizing:border-box;
                        border:0;
                        text-align:center;
                    }
                }
            }
        }
        .agree{
            >div{
                position:absolute;
                top:0;
                left:150px;
                padding-left:20px;
                input{
                    left:0;
                    width:auto;
                }
                .choice{
                    font-weight:normal;
                    color: #888;
                }
                .view{
                    font-size:13px;
                    font-weight:normal;
                    color:#ff8a3d;
                }
            }
        }
    }
    
    .agreeUse{
        margin : 20px 0 70px 20px;
        .agreeAll{
            .choice{
                font-weight:normal;
                color: #888;
            }
        }
        .agreeChoice{
            margin:10px 0 0 50px;
            >div{
                display: inline-block;
                margin-right:120px;
                input{
                    margin-right:10px;
                }
            }
        }
    }
    .btnBox{
        text-align:center;
        margin-bottom:100px;
        a{
            text-decoration:none;
            color:#ff8a3d;
            font-size:12px;
            line-height:50px;
            font-weight:bold;
            text-align:center;
            width:220px;
            height:50px;
            border:1px solid #ff8a3d;
            display: inline-block;
            margin-left:20px;
            border-radius:5px;
            background:#fff;
            &:first-child{
                margin-left:0;
            }
        }
        a.submit{
            background:#ff8a3d;
            color:#fff;
        }
    }
`;


const MyInfoChng = ({ID}) =>{
    
    return (<InfoBox>
            <div className="title">
                <span className="tit">기본정보</span>
                <p className="necessary">*필수입력사항</p>
            </div>
            <div className="InfoBasic">
                <div>아이디* <input type="text" className="readonly" value={ID} readOnly/></div>
                <div className="mt15">현재 비밀번호 <input type="text"/></div>
                <div>새 비밀번호 <input type="text"/></div>
                <div>새 비밀번호 확인<input type="text"/></div>
                <div className="mt15">이름*<input type="text"/></div>
                <div className="mt15">이메일*<input type="text"/><a href="javascript:">이메일 중복확인</a></div>
                <div className="mt15">휴대폰*<input type="text"/><a href="javascript:">다른 번호 인증</a></div>
                <div><input type="text" readOnly/><a href="javascript:" className="disable">인증 번호 확인</a></div>
            </div>
            <div className="title">
                <span className="tit">추가정보</span>
            </div>
            <div className="InfoMore">
                <div className="gender">성별 
                    <div className="male"><Radio type="checkbox" name="gender" value="MALE"/>남자</div>
                    <div className="female"><Radio type="checkbox" name="gender" value="FEMALE"/>여자</div>
                </div>
                <div className="mt15 birth">생년월일 
                    <div>
                        <div className="box"><input type="text" maxLength="4"/></div><span>/</span>
                        <div className="box"><input type="text" maxLength="2"/></div><span>/</span>
                        <div className="box"><input type="text" maxLength="2"/></div>
                    </div>
                </div>
                <div className="agree mt15">선택약관 동의 <div><input type="checkbox" name="선택약관동의" id="agreeChoice"/>개인정보처리방침<strong className="choice">(선택)</strong><strong className="view">약관보기<i className="fas fa-chevron-right"></i></strong></div></div>
            </div>
            <div className="title">
                <span className="tit">이용약관 동의*</span>
                <p className="description">선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
            </div>
            <div className="agreeUse">
                <div className="agreeAll"><input type="checkbox" name="" id=""/>무료배송, 할인쿠폰 등 혜택/정보 수신<strong className="choice">(선택)</strong></div>
                <div className="agreeChoice"><div><input type="checkbox" name="" id=""/>SMS</div><div><input type="checkbox" name="" id=""/>이메일</div></div>
            </div>
            <div className="btnBox">
                <a href="" className="secession">탈퇴하기</a>
                <a href="" className="submit">회원정보수정</a>
            </div>
    </InfoBox>);
}

export default MyInfoChng;