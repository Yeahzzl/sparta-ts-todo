import { createGlobalStyle } from "styled-components";
import GmarketSansBold from "./fonts";
import GmarketSansMedium from "./fonts";
import GmarketSansLight from "./fonts";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GmarketSansBold';
        src: local('GmarketSansBold'), local('GmarketSansBold');
        font-style: normal;
        src: url(${GmarketSansBold}) format('opentype');
    }
    @font-face {
        font-family: 'GmarketSansMedium';
        src: local('GmarketSansMedium'), local('GmarketSansMedium');
        font-style: normal;
        src: url(${GmarketSansMedium}) format('opentype');
    }
    @font-face {
        font-family: 'GmarketSansLight';
        src: local('GmarketSansLight'), local('GmarketSansLight');
        font-style: normal;
        src: url(${GmarketSansLight}) format('opentype');
    }

   *{
    box-sizing:border-box;
    max-width:1200px;
    min-width:800px;
   }
`;

export default GlobalStyle;
export {};
