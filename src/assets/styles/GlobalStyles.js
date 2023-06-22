import { createGlobalStyle } from 'styled-components';
import CabinNormalWoff from './fonts/Cabin-Regular.woff';
import CabinNormalWoff2 from './fonts/Cabin-Regular.woff2';
import CabinBoldWoff from './fonts/Cabin-Bold.woff';
import CabinBoldWoff2 from './fonts/Cabin-Bold.woff2';
import NotoNormalWoff from './fonts/notokr_regular.woff';
import NotoNormalWoff2 from './fonts/notokr_regular.woff2';
import NotoMediumWoff from './fonts/notokr_medium.woff';
import NotoMediumWoff2 from './fonts/notokr_medium.woff2';
import NotoBoldWoff from './fonts/notokr_bold.woff';
import NotoBoldWoff2 from './fonts/notokr_bold.woff2';
import NotoBlackWoff from './fonts/notokr_black.woff';
import NotoBlackWoff2 from './fonts/notokr_black.woff2';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Cabin";
    font-weight: normal;
    font-style: normal;
    src: 
    url(${CabinNormalWoff2}) format("woff2"),
    url(${CabinNormalWoff}) format("woff");
  }

  @font-face {
    font-family: "Cabin";
    font-weight: 700;
    font-style: normal;
    src: 
    url(${CabinBoldWoff2}) format("woff2"),
    url(${CabinBoldWoff}) format("woff");
  }

  @font-face {
    font-family: "NotoSans";
    font-weight: normal;
    font-style: normal;
    src: 
    url(${NotoNormalWoff2}) format("woff2"),
    url(${NotoNormalWoff}) format("woff");
  }

  @font-face {
    font-family: "NotoSans";
    font-weight: 500;
    font-style: normal;
    src: 
    url(${NotoMediumWoff2}) format("woff2"),
    url(${NotoMediumWoff}) format("woff");
  }

  @font-face {
    font-family: "NotoSans";
    font-weight: 700;
    font-style: normal;
    src: 
    url(${NotoBoldWoff2}) format("woff2"),
    url(${NotoBoldWoff}) format("woff");
  }

  @font-face {
    font-family: "NotoSans";
    font-weight: 900;
    font-style: normal;
    src: 
    url(${NotoBlackWoff2}) format("woff2"),
    url(${NotoBlackWoff}) format("woff");
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  html, body, #root {
    height: 100%;
    min-width: 360px;
  }

  body {
    line-height: 1.5;
    word-break: keep-all;
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: Cabin, NotoSans, Helvetica Neue, Apple SD Gothic Neo, Droid Sans, Malgun Gothic, 맑은 고딕, Dotum, 돋움, sans-serif;
    transition: background .3s;
  }

  ol, ul, li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  img {
    max-width: 100%;
    vertical-align: top;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    font-family : Cabin, NotoSans, Helvetica Neue, Apple SD Gothic Neo, Droid Sans, Malgun Gothic, 맑은 고딕, Dotum, 돋움, sans-serif;
  }
  
  :focus {
    outline: 0;
  }
`;
