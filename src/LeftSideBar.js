import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import userImage from "./images/user.jpg";

const Container = styled.div`
  width: 1260px;
  display: flex;
  padding-left: 90px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
const LeftContainerParent = styled.div`
  width: 280px;
  float: left;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftContainer = styled.div`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  padding-right: 20px;
  box-sizing: border-box;
  padding-top: 5px;
  padding-bottom: 15px;
  border-right: 1px solid #eee;
`;

const MenuContainer = styled.div``;

const MenuImage = styled.div`
  display: inline-block;
`;

const IconTrendDotContainer = styled(FontAwesomeIcon)`
  font-size: 15px;
  cursor: pointer;
  color: #989898;
  margin-right: 1px;
`;

const IconTwitterContainer = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: #1d9bf0;
  cursor: pointer;
  border-radius: 50%;
  padding: 10px;
  &:hover {
    background-color: #e6f3ff;
  }
`;

const MenuNav = styled.ul``;

const MenuList = styled.div`
  margin-bottom: 8px;
  display: inline-block;
  margin-right: 50px;
  align-items: center;
  margin-left: -45px;
  padding: 10px 15px;
  padding-right: 25px;
  border-radius: 50px;
  box-sizing: border-box;
  cursor: pointer;
  &:link {
    color: inherit;
  }
  &:visited {
    color: inherit;
  }
  &:hover {
    background-color: #eeeeee;
  }
`;

const MenuListSpan = styled.span`
  margin-bottom: 8px;
  display: inline-block;
  margin-right: 50px;
  margin-left: -45px;
  align-items: center;
  padding: 10px 15px;
  padding-right: 25px;
  border-radius: 50px;
  box-sizing: border-box;
  cursor: pointer;
  &:link {
    color: inherit;
  }
  &:visited {
    color: inherit;
  }
  &:hover {
    background-color: #eeeeee;
  }
`;

const IconContainer = styled.div`
  width: 25px !important;
  display: inline-block;
  vertical-align: top;
`;

const IconBlueDot = styled.div`
  background-color: #1d9bf0;
  border-radius: 50px;
  height: 6px;
  width: 6px;
  margin-left: 20px;
`;

const IconText = styled.div`
  display: inline-block;
  font-size: 18px;
  margin-left: 20px;
`;

const MenuButton = styled.button`
  margin-left: 0px;
  padding: 15px 76px;
  background-color: var(--twitter-color);
  color: white;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: #1a8cd8;
  }
`;

const UserContainer = styled.div`
  width: 215px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 8px px;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`;

const UserPhoto = styled.img`
  flex: 1;
  width: 46px;
  height: 46px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

const UserName = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 1px;
`;

const UserEmail = styled.div`
  font-size: 14px;
  color: #536471;
`;

function Widgets() {
  return (
    <>
      <Container>
        {/*좌측*/}
        <LeftContainerParent>
          <LeftContainer>
            <MenuContainer>
              <MenuImage>
                <IconTwitterContainer icon={faTwitter}></IconTwitterContainer>
              </MenuImage>
              <MenuNav>
                <MenuList>
                  <IconBlueDot></IconBlueDot>
                  <IconContainer>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <g>
                        <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path>
                      </g>
                    </svg>
                  </IconContainer>
                  <IconText>홈</IconText>
                </MenuList>
                <MenuList>
                  <IconContainer>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <g>
                        <path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path>
                      </g>
                    </svg>
                  </IconContainer>
                  <IconText>탐색하기</IconText>
                </MenuList>
                <MenuListSpan>
                  <IconContainer>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <g>
                        <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path>
                      </g>
                    </svg>
                  </IconContainer>
                  <IconText>알림</IconText>
                </MenuListSpan>
                <MenuListSpan>
                  <IconContainer>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <g>
                        <path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path>
                      </g>
                    </svg>
                  </IconContainer>
                  <IconText>쪽지</IconText>
                </MenuListSpan>
                <MenuListSpan>
                  <IconContainer>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <g>
                        <path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"></path>
                      </g>
                    </svg>
                  </IconContainer>
                  <IconText>북마크</IconText>
                </MenuListSpan>
                <MenuListSpan>
                  <IconContainer>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <g>
                        <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"></path>
                        <path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"></path>
                      </g>
                    </svg>
                  </IconContainer>
                  <IconText>리스트</IconText>
                </MenuListSpan>
                <MenuListSpan>
                  <IconContainer>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <g>
                        <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path>
                      </g>
                    </svg>
                  </IconContainer>
                  <IconText>프로필</IconText>
                </MenuListSpan>
                <MenuListSpan>
                  <IconContainer>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <g>
                        <circle cx="17" cy="12" r="1.5"></circle>
                        <circle cx="12" cy="12" r="1.5"></circle>
                        <circle cx="7" cy="12" r="1.5"></circle>
                        <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
                      </g>
                    </svg>
                  </IconContainer>
                  <IconText>더보기</IconText>
                </MenuListSpan>
              </MenuNav>
              <MenuButton type="button">트윗하기</MenuButton>
            </MenuContainer>
            <UserContainer>
              <UserPhoto src={userImage}></UserPhoto>
              <UserInfo>
                <UserName>퍼비</UserName>
                <UserEmail>@fub2fub</UserEmail>
              </UserInfo>
              <IconTrendDotContainer icon={faEllipsisH}></IconTrendDotContainer>
            </UserContainer>
          </LeftContainer>
        </LeftContainerParent>
      </Container>
    </>
  );
}

export default Widgets;
