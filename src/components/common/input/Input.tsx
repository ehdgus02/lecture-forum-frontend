import styled from "styled-components";

const Input = styled.input<{ $hasError?: boolean }>`
    width: 100%;
    padding: 12px 16px;
    background-color: ${props => props.theme.color.background.default};
    border: 1px solid
        ${props => (props.$hasError ? props.theme.color.error : props.theme.color.divider)};
    border-radius: 8px;
    font-size: 15px;
    color: ${props => props.theme.color.text.default};
    transition: all 0.5s;

    &::placeholder {
        color: ${props => props.theme.color.text.disabled};
    }

    &:focus {
        border-color: ${props =>
            props.$hasError ? props.theme.color.error : props.theme.color.primary};
    }
`;

export default Input;
