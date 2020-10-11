import Layout from '@components/Layout';
import MyNav from '@components/Mypage/MyPageNav';
// Wishlist component
import Wishlist from '@components/MyProduct/index';
import debug from 'debug';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const log = debug('Luna:MyProductPage');

const MyProd = styled.div`
  width: calc(100% - 170px);
  margin-left: 170px;
  margin-top: 70px;
  .title {
    position: relative;
    border-bottom: 3px solid #ff8a3d;
    padding-bottom: 15px;
    span.tit {
      display: inline;
      font-size: 26px;
      margin-right: 15px;
    }
  }
  .productList {
    margin-top: 30px;
    width: 100%;
    height: 200px;
    background: red;
  }
`;
const MyBuyProd = styled.div`
  width: calc(100% - 250px);
  margin: 50px 0 50px 250px;
  .title {
    position: relative;
    border-bottom: 3px solid #ff8a3d;
    padding-bottom: 15px;
    span.tit {
      display: inline;
      font-size: 26px;
      margin-right: 15px;
    }
  }
  .productList {
    margin-top: 30px;
    width: 100%;
    height: 200px;
    background: red;
  }
`;
const MyCollectProd = styled.div`
  width: calc(100% - 250px);
  margin: 50px 0 50px 250px;
  .title {
    position: relative;
    border-bottom: 3px solid #ff8a3d;
    padding-bottom: 15px;
    span.tit {
      display: inline;
      font-size: 26px;
      margin-right: 15px;
    }
  }
  .productList {
    margin-top: 30px;
    width: 100%;
    height: 200px;
    background: red;
  }
`;

const MyProduct: NextPage = () => {
  const router = useRouter();

  return (
    // @ts-expect-error
    <Layout>
      <div className="container">
        <MyNav choose="내 상품" router={router} />
        <MyProd>
          <div className="title">
            <span className="tit">내 판매상품</span>
          </div>
          <section className="productList"></section>
        </MyProd>
        <MyBuyProd>
          <div className="title">
            <span className="tit">내 구매상품</span>
          </div>
          <section className="productList"></section>
        </MyBuyProd>
        <MyCollectProd>
          <div className="title">
            <span className="tit">찜한 상품</span>
          </div>
          <section>
            {/* @ts-expect-error */}
            <Wishlist />
          </section>
        </MyCollectProd>
      </div>
    </Layout>
  );
};

MyProduct.getInitialProps = async () => {
  log('getInitialProps');
  return {};
};

export default MyProduct;
