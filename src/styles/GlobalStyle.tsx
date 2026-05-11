import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: "Pretendard Variables", sans-serif;
        background-color: ${props => props.theme.color.background.default};
        color: ${props => props.theme.color.text.default}
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
    }
    
    input, textarea {
        font-family: inherit;
        
        &:hover {
            outline: none;
        }
    }
`;
