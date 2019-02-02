import styled, {
    css
} from 'styled-components';


export const StyledHeader = styled.div `
    
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(53, 131, 224);

`

export const StyledImg = styled.img `
    
    padding: 0px 20px;
    width: ${props => props.width};
    height: ${props => props.height};

`

export const StyledGrid = styled.div `

    height: 100%;
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-rows: 8rem 1fr 4rem;
    grid-template-areas:    "header header header header header header"
                            "side-bar main main main main nav-bar"
                            "footer footer footer footer footer footer";
    background-color: rgb(53, 131, 224);
`

export const StyledFooter = styled.footer `

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    grid-area: footer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;

`

export const StyledSide = styled.div `

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    grid-area: side-bar;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;

`

export const StyledNav = styled.div `

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    grid-area: nav-bar;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;

`

export const StyledMain = styled.div `

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    grid-area: main;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f3f3;
    height: 100%;
    width: 100%;

`