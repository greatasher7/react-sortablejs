import { createGlobalStyle } from 'styled-components';
// 각 폰트 파일 import
import Font_Light from '../Assets/Fonts/Font-Light.woff';
import Font_Regular from '../Assets/Fonts/Font-Regular.woff';
import Font_Bold from '../Assets/Fonts/Font-Bold.woff';

export default createGlobalStyle`
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${Font_Light}) format('woff'); 
        font-weight: lighter;
    }
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${Font_Regular}) format('woff');
        font-weight: normal;
    }
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${Font_Bold}) format('woff');
        font-weight: bold;
    }`;
