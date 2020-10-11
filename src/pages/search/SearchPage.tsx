import api from '@common/api';
import CardList from '@components/Card/List';
import Layout from '@components/Layout';
import debug from 'debug';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const log = debug('Luna:SearchPage');

const SearchContainerWrapper = styled.section`
  background: #f8f9fa;
  min-height: calc(100% - 364px);
  padding: 30px 0 40px 0;
  box-sizing: border-box;
  .container {
    .articles-wrap {
      padding-bottom: 40px;
      p.article-kind {
        text-align: center;
        font-size: 32px;
        font-weight: bold;
        position: relative;
        padding: 50px 0 30px;
        margin-bottom: 60px;
        &:before {
          display: block;
          position: absolute;
          left: 50%;
          bottom: 0;
          -webkit-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          transform: translateX(-50%);
          content: '';
          width: 80px;
          height: 2px;
          background-color: #ff8a3d;
        }
      }
      .loading {
        width: 100%;
        text-align: center;
        margin: 100px 0;
      }
      .no-data {
        width: 100%;
        text-align: center;
        margin: 100px 0;
      }
    }
    .article-hr-border {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #e9ecef;
      padding: 0;

      &:last-of-type {
        display: none;
      }
    }
    .more-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      cursor: pointer;
      width: 100%;
      color: #868e96;
      font-size: 16px;
      border-top: 1px solid #e8ecef;
    }
  }
`;

const SearchPage: NextPage = () => {
  const [products, setProducts] = useState([]);
  const [totalCount, settotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [fetched, setFetched] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSearchValue(decodeURIComponent(window.location.href.split('=')[1]));
    api
      .get(
        `/product/search?q=${
          window.location.href.split('=')[1]
        }&page_size=16&page=${page}`
      )
      .then((res) => {
        setProducts((v) => v.concat(res.data.results));
        setFetched(true);
        settotalCount(res.data.count);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

  return (
    // @ts-expect-error
    <Layout setProducts={setProducts}>
      <SearchContainerWrapper>
        <div className="container">
          <div className="articles-wrap">
            <p className="article-kind">{searchValue}</p>
            {products.length === 0 ? (
              fetched ? (
                <div className="no-data">검색 결과가 없습니다.</div>
              ) : (
                <div className="loading">
                  <img src="./images/list/loading.gif" alt="로딩중" />
                </div>
              )
            ) : (
              <CardList list={products} />
            )}
          </div>
          {products.length < totalCount && (
            <div className="more-btn" onClick={() => setPage((v) => v + 1)}>
              <span>더보기</span>
            </div>
          )}
        </div>
      </SearchContainerWrapper>
    </Layout>
  );
};

SearchPage.getInitialProps = async () => {
  log('getInitialProps');
  return {};
};

export default SearchPage;
