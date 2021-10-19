import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root {
        --darkBlue: #3B4977;
        --white: #ffffff;
<<<<<<< HEAD
=======
        --gray: #F5F5F5;
        --color-primary: #3B4977;
        --color-secondary: #3B7773;
        --color-tertiary: #968FE9;
        --color-quaternary: #E98FD5;
        --color-title: #111111;
        --color-text: #878787;
        --grey-1: #CCCCCC;
        --grey-2: #F5F5F5;
        --border-width-input-button: 2px;
>>>>>>> e45bfff8779e3cdfd1ae9435178813cecddee972
    }
    body {
        /* background: ; */
        /* font-family: ; */
    }
    border-list-style, input, button {
        /* font-family: ; */
        /* font-size: ; */
    }
    h1, h2, h3, h4, h5, h6 {
        /* font-family: ; */
    }
    button {
        cursor: pointer;
    }
    a {
        /* color: ; */
        text-decoration: none;
    }

    .MuiFormLabel-root.Mui-focused {
        color: var(--color-primary) !important;
    }
    
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: var(--color-primary) !important;
    }

    .MuiOutlinedInput-notchedOutline{
        border-width: var(--border-width-input-button);
    }
`;
