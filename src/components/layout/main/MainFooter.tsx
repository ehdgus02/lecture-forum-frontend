import styled from "styled-components";

function MainFooter() {
    return (
        <FooterContainer>
            <p>Copyright 2026 My Website</p>
        </FooterContainer>
    );
}

export default MainFooter;

const FooterContainer = styled.footer`
    border-top: 1px solid ${props => props.theme.color.divider};
    background-color: ${props => props.theme.color.background.paper};
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
