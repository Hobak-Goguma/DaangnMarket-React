import React, {useEffect, useState} from "react";
import api from "../common/api";
import Layout from "../common/components/Layout";
import styled from "styled-components";
import CardList from "../components/Card/List";
import {withRouter} from "react-router-dom";

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
			    content: "";
			    width: 80px;
			    height: 2px;
			    background-color: #FF8A3D;
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

const SearchPage = () => {

	const [products, setProducts] = useState([]);
	const [totalCount, settotalCount] = useState([]);
	const [page, setPage] = useState(0);
	const [fetched, setFetched] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		setSearchValue(decodeURIComponent(window.location.href.split("=")[1]));
		api.get(`/product/search?q=${window.location.href.split("=")[1]}`)
		.then((res) => {
			setProducts(res.data);
			setFetched(true);
			// Todo: api response 변경 예정. total_count 주면 대입
			settotalCount(res.data.length)
		})
		.catch(err => {
			console.error(err)
		});
	}, [page]);

	return (
		<Layout setProducts={setProducts}>
			<SearchContainerWrapper>
				<div className="container">
					<div className="articles-wrap">
						<p className="article-kind">{searchValue}</p>
						{products.length === 0 ?
							(fetched ?
									<div className="no-data">
										검색 결과가 없습니다.
									</div>
									: <div className="loading">
										<img src="./img/list/loading.gif" alt="로딩중"/>
									</div>
							) : (
								<CardList list={products}/>
							)}
					</div>
					{products.length < totalCount ? (
						<div className="more-btn" onClick={() =>
							setPage(v => v + 1)}>
							<span>더보기</span>
						</div>
					) : null}
				</div>
			</SearchContainerWrapper>
		</Layout>
	);
};

export default withRouter(SearchPage);
