import styled from "styled-components";

const Textarea = styled.textarea<{ $hasError?: boolean }>`
    width: 100%;
    padding: 12px 16px;
    background-color: ${props => props.theme.color.background.default};
    border: 1px solid
        ${props => (props.$hasError ? props.theme.color.error : props.theme.color.divider)};
    border-radius: 8px;
    font-size: 15px;
    color: ${props => props.theme.color.text.default};
    transition: all 0.5s;
    min-height: 300px;
    resize: vertical;

    &::placeholder {
        color: ${props => props.theme.color.text.disabled};
    }

    &:focus {
        border-color: ${props =>
            props.$hasError ? props.theme.color.error : props.theme.color.primary};
    }
`;

export default Textarea;
