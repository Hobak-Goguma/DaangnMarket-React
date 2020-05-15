import React from "react";
import styled from "styled-components";

const ArticleDescription = () => {
  return (
    <StyledArticleDescription>
      <h1 className="article-title">
        여성용 자전거/바구니 자전거 삼천리자전거 24프림로즈
      </h1>
      <p className="article-category">
        스포츠/레저 ∙<time> 4일 전</time>
      </p>
      <p className="article-price">66,000원</p>
      <div className="article-detail">
        <p>
          예쁜 자전거, 여성용 자전거, 바구니 자전거 처분합니다.
          <br />
          (기아 7단)
        </p>
        <p>
          당근마켓에서 자전거를 검색해 본 결과 제 아내가 타고 다니던 것보다 예쁜
          것은 보지 못했습니다.(진심!)
        </p>
        <p>
          사무실과 집의 거리가 1키로 남짓되어서 아내가 사무실에서 근무할때
          타고다녔습니다.
        </p>
        <p>
          2개월 근무하고 다른 곳에 취업하면서 지금은 사용하지 않고 있습니다.
        </p>
        <p>구매는 2018년에 했는데, 실제로 타고 다닌 것은 2개월정도 입니다.</p>
        <p>
          아내가 멋스러운것을 좋아해서 동네 자전거 가게에서 바가지쓰고
          30만원넘게 주고 구매했어요. 인터넷 검색해보니까, 지금은 24만원 정도에
          거래되고 있네요. ㅜ.ㅜ
        </p>
        <p>
          전에 살던 집 마당에 세워놨더니 철로 된 부분 몇군데가 녹이 슬어
          있었어요. 방청윤활유 듬뿍 뿌려서 닦아놓았습니다. 자전거뿐 아니라 금속
          제품은 다이소에서 방청윤활유(WD40같은 거) 구매하셔서 수시로
          뿌려주셔야합니다.
        </p>
        <p>
          자전거의 상태를 확인하는 방법은 여러가지가 있는데, 그중에 타이어
          테두리에 찍혀있는 돌기를 확인하는 것입니다. 돌기가 사라진 것은 상태가
          아무리 좋다해도 조만간 타이어 자체를 교환해야 할수도 있습니다. 제
          아내가 타던 자전거는 돌기가 대부분 그대로 있습니다. 그만큼 많이
          사용하지 않았다는 증거입니다.
          <br />
          또한, 부착되어 있는 스티커가 그대로 있다면 그것도 상태가 좋다는
          것이라고 생각합니다. 이 자전거에는 모든 스티커가 구매당시 그대로
          부착되어 있어요 ㅎㅎ
        </p>
        <p>
          가까운 곳에 사시면 바로 타고 가셔도 되고요.
          <br />
          차량 갖고 오시면 제가 싣는 거 도와드리겠습니다.
        </p>
        <p>
          *추가로 세가지 품목을 함께 드릴께요. <br />
          1.자전거 타이어 펌프(공도 함께 넣을 수 있어요)
          <br />
          2.뒷좌석 고무 밴드(새거)
          <br />
          3.잠금장치 (비밀번호 : 0822)
        </p>
        <p>
          갖고 가시자 마자 바로 타실 수 있도록 제가 직접 하루종일
          손질했습니다.^^
          <br />
          먼저 연락주신분께 드리겠습니다.
        </p>
        <p>
          *대구 수성구 수성동 1가275-5 #대성열정 아카데미 근처에서 직거래
          희망합니다.
        </p>
      </div>
      <p className="article-counts">채팅 8 ∙ 관심 5 ∙ 조회 547</p>
    </StyledArticleDescription>
  );
};

export default ArticleDescription;

const StyledArticleDescription = styled.section`
  padding: 32px 0;
  width: 677px;
  margin: 0 auto;
  border-bottom: 1px solid #e9ecef;

  h1.article-title {
    margin-top: 0;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: -0.6px;
  }

  p.article-category {
    margin-top: 4px;
    font-size: 13px;
    line-height: 1.46;
    letter-spacing: -0.6px;
    color: #868e96;
  }

  p.article-price {
    margin-top: 4px;
    line-height: 1.76;
    letter-spacing: -0.6;
  }

  .article-detail {
    margin-top: 8px;
    margin-bottom: 16px;

    p {
      font-size: 17px;
      line-height: 1.6;
      letter-spacing: -0.6px;
      margin: 16px 0;
      word-break: break-all;
    }
  }

  .article-counts {
    font-size: 13px;
    line-height: 1.46;
    letter-spacing: -0.6px;
    color: #868e96;
  }
`;
