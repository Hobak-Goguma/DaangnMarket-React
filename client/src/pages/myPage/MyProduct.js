import React from "react";
import MyLayout from "./MypageLayout";
import styled from "styled-components";
const MyProd = styled.div`
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
    }
    .productList{
        margin-top:40px;
        width:100%;
        height:200px;
        background:red;
    }
`;
const MyBuyProd = styled.div`
    width:calc(100% - 250px);
    margin: 50px 0 50px 250px;
    .title{
        position:relative;
        border-bottom : 3px solid #ff8a3d;
        padding-bottom: 15px;
        span.tit{
            display:inline;
            font-size:26px;
            margin-right:15px;
        }
    }
    .productList{
        margin-top:40px;
        width:100%;
        height:200px;
        background:red;
    }
`;
const MyCollectProd = styled.div`
    width:calc(100% - 250px);
    margin: 50px 0 50px 250px;
    .title{
        position:relative;
        border-bottom : 3px solid #ff8a3d;
        padding-bottom: 15px;
        span.tit{
            display:inline;
            font-size:26px;
            margin-right:15px;
        }
    }
    .productList{
        margin-top:40px;
        width:100%;
        height:200px;
        background:red;
    }
`;
    
    
const MyProduct = ({history}) =>{
    const choose = "내 상품";

    return(
    <MyLayout choose = {choose} history={history}>
        <MyProd>
            <div className="title">
                <span className="tit">내 판매상품</span>
            </div>
            <section className="productList">

            </section>
        </MyProd>
        <MyBuyProd>
            <div className="title">
                <span className="tit">내 구매상품</span>
            </div>
            <section className="productList">

            </section>
        </MyBuyProd>
        <MyCollectProd>
            <div className="title">
                <span className="tit">내 구매상품</span>
            </div>
            <section className="productList">

            </section>
        </MyCollectProd>
    </MyLayout>);
}

export default MyProduct;