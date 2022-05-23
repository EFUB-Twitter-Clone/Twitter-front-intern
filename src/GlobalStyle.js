import { createGlobalStyle } from "styled-components";
//import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard Variable';
    font-weight: 45 920;
    font-style: normal;
    font-display: swap;
    src: local('Pretendard Variable'), url('./woff2/PretendardVariable.woff2') format('woff2-variations');
  }

  :root{
    --twitter-color: #1DA1F2;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    font-family:'Pretendard Variable'
                -apple-system, 
                sans-serif;
    background-color: #ffffff;
    display:flex;
    justify-content:center;
    position:relative;

    &::-webkit-scrollbar {
      width: 11px;
      height: 11px;
      background: #ffffff;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 7px;
      background-color: #787878;

      &:hover {
        background-color: #C0C0C0;
      }
      &:active{
        background-color: #C0C0C0;
      }
    }
    &::-webkit-scrollbar-track {
      background-color: #404040;
    }
  }
 
  button{
    border:none;
    outline:none;
    cursor: pointer;
    background-color:transparent;
    padding:0;
  }
  a{
    text-decoration:none;
  }
  a:focus, a:visited{
  }

  @media (max-width:768px){
    #root{
      width:100%;
    }
  }
`;

export default GlobalStyle;
