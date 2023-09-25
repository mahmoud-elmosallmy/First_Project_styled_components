import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding: 40px 0;
`
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media screen and (max-width: ${({theme}) => theme.modile }) {
        flex-direction: column;
    }
`
export const Logo = styled.img`
    @media screen and (max-width: ${({theme}) => theme.modile }) {
        margin-bottom: 40px;
    }
`
export const Image = styled.img`
    width: 375px;
    margin-left: 40px;
    @media screen and (max-width: ${({theme}) => theme.modile }) {
        margin: 40px 0 30px;
    }
`