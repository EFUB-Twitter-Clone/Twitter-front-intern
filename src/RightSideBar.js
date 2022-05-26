import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import catImage from "./images/cat.jpg";

const Container = styled.div`
  display: flex;
  padding-left: 900px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const RightContainerParent = styled.div`
  width: 330px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightContainer = styled.div`
  width: 330px;
  padding-left: 20px;
  position: fixed;
  height: 100vh;
  border-left: 1px solid #eee;
`;

const SearchContainer = styled.div`
  background-color: #f7f9f9;
  border-radius: 20px;
  padding: 10px 0px;
  margin-top: 10px;
`;

const SearchIcon = styled.div`
  width: 20px !important;
  display: inline-block;
  margin-left: 17px;
  vertical-align: top;
  color: rgb(83, 100, 113);
`;

const SearchText = styled.div`
  display: inline-block;
  font-size: 14px;
  margin-left: 20px;
  color: #536471;
`;

const TrendContainer = styled.div`
  background-color: #f7f9f9;
  border-radius: 20px;
  padding: 5px 0px;
  margin-top: 15px;
`;

const TrendHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TrendHeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 17px;
  color: #0f1419;
`;

const IconTrendContainer = styled(FontAwesomeIcon)`
  font-size: 16px;
  margin-right: 15px;
  cursor: pointer;
`;

const TrendInfo = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 13px 17px;
  margin-top: 10px;
  cursor: pointer;
  color: #31302e;
  &:hover {
    background-color: #eff1f1;
  }
`;

const TrendContent = styled.div``;

const TrendHeading = styled.div`
  font-size: 12px;
  line-height: 5px;
  color: #536471;
`;

const TrendTitle = styled.h1`
  font-size: 14px;
  font-weight: bold;
  color: #0f1419;
`;

const IconTrendDotContainer = styled(FontAwesomeIcon)`
  font-size: 15px;
  cursor: pointer;
  color: #989898;
  margin-right: 1px;
`;

const SeeMore = styled.div`
  color: var(--twitter-color);
  font-size: 14px;
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 17px;
  &:hover {
    text-decoration: underline;
  }
`;

const FollowContainer = styled.div`
  background-color: #f7f9f9;
  border-radius: 20px;
  margin-top: 15px;
  padding-top: 3px;
  padding-bottom: 5px;
`;

const FollowHeader = styled.h1`
  font-size: 19px;
  font-weight: bold;
  margin-left: 17px;
`;

const FollowLink = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  color: inherits;
  &:visited {
    color: inherit;
  }
`;

const FollowContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  padding: 10px 17px;
  &:hover {
    background-color: #eff1f1;
  }
`;

const FollowImage = styled.img`
  width: 47px;
  height: 47px;
  border-radius: 50%;
`;

const FollowInfo = styled.div`
  margin-left: 15px;
  margin-right: 20px;
`;

const FollowInfoTitle = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  color: #31302e;
`;

const FollowInfoDesc = styled.div`
  font-size: 14px;
  color: #536471;
`;

const FollowButton = styled.span`
  color: white;
  padding: 7px 15px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: bold;
  background-color: #272c30;
  margin-left: auto;
`;

const PolicyContainer = styled.div`
  margin-top: 20px;
`;

const PolicyHeader = styled.div``;

const PolicyLink = styled.a`
  font-size: 11px;
  margin: 0 10px;
  color: #536471;
  &:hover {
    text-decoration: underline;
  }
`;

const PolicyFooter = styled.div`
  font-size: 12px;
  margin-top: 6px;
  margin-left: 12px;
  color: #536471;
`;

function Widgets() {
  return (
    <>
      <Container>
        {/*우측*/}
        <RightContainerParent>
          <RightContainer>
            <SearchContainer>
              <SearchIcon>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="rgb(83, 100, 113)"
                >
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </SearchIcon>
              <SearchText>트위터 검색</SearchText>
            </SearchContainer>
            <TrendContainer>
              <TrendHeader>
                <TrendHeaderTitle>나를 위한 트렌드</TrendHeaderTitle>
              </TrendHeader>
              <TrendInfo>
                <TrendContent>
                  <TrendHeading>대한민국에서 트렌드 중</TrendHeading>
                  <TrendTitle>윤하언니</TrendTitle>
                </TrendContent>
                <IconTrendDotContainer
                  icon={faEllipsisH}
                ></IconTrendDotContainer>
              </TrendInfo>
              <TrendInfo>
                <TrendContent>
                  <TrendHeading>대한민국에서 트렌드 중</TrendHeading>
                  <TrendTitle>모럴센스</TrendTitle>
                </TrendContent>
                <IconTrendDotContainer
                  icon={faEllipsisH}
                ></IconTrendDotContainer>
              </TrendInfo>
              <TrendInfo>
                <TrendContent>
                  <TrendHeading>대한민국에서 트렌드 중</TrendHeading>
                  <TrendTitle>수면바지</TrendTitle>
                  <TrendHeading>7,260 트윗</TrendHeading>
                </TrendContent>
                <IconTrendDotContainer
                  icon={faEllipsisH}
                ></IconTrendDotContainer>
              </TrendInfo>
              <TrendInfo>
                <TrendContent>
                  <TrendHeading>푸드·실시간 트렌드</TrendHeading>
                  <TrendTitle>와플대학</TrendTitle>
                  <TrendHeading>7,260 트윗</TrendHeading>
                </TrendContent>
                <IconTrendDotContainer
                  icon={faEllipsisH}
                ></IconTrendDotContainer>
              </TrendInfo>
              <TrendInfo>
                <TrendContent>
                  <TrendHeading>대한민국에서 트렌드 중</TrendHeading>
                  <TrendTitle>음향사고</TrendTitle>
                </TrendContent>
                <IconTrendDotContainer
                  icon={faEllipsisH}
                ></IconTrendDotContainer>
              </TrendInfo>

              <SeeMore>더 보기</SeeMore>
            </TrendContainer>
            <FollowContainer>
              <FollowHeader>팔로우 추천</FollowHeader>
              <FollowContent>
                <FollowLink>
                  <FollowImage src={catImage}></FollowImage>
                  <FollowInfo>
                    <FollowInfoTitle>Catcatcat</FollowInfoTitle>
                    <FollowInfoDesc>@CatSaveWorld</FollowInfoDesc>
                  </FollowInfo>
                  <FollowButton>팔로우</FollowButton>
                </FollowLink>
              </FollowContent>
              <SeeMore>더 보기</SeeMore>
            </FollowContainer>
            <PolicyContainer>
              <PolicyHeader>
                <PolicyLink href="https://twitter.com/ko/tos" target="_blank">
                  이용약관
                </PolicyLink>
                <PolicyLink
                  href="https://twitter.com/ko/privacy"
                  target="_blank"
                >
                  개인정보 처리방침
                </PolicyLink>
                <PolicyLink
                  href="https://help.twitter.com/ko/rules-and-policies/twitter-cookies"
                  target="_blank"
                >
                  쿠키 정책
                </PolicyLink>
                <PolicyLink
                  href="https://business.twitter.com/en/help.html"
                  target="_blank"
                >
                  광고 정보
                </PolicyLink>
              </PolicyHeader>
              <PolicyFooter>© 2022 EFUB_ToyProject</PolicyFooter>
            </PolicyContainer>
          </RightContainer>
        </RightContainerParent>
      </Container>
    </>
  );
}

export default Widgets;
