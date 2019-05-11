import styled, {
    css
} from 'styled-components';


export const StyledHeader = styled.div `
    
    grid-area: header;
    /* position: relative; */
    display: flex;
    width: 100%;
    min-height: 140px;
    justify-content: center;
    align-items: center; 
    /* box-shadow: 0 1px 2px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
    background-color: rgb(247,247,247); */
    background-color: transparent;

    @media (max-width: 470px) {
        display: none;       
    }

`

export const StyledImg = styled.img `
    
    /* padding: 0px 50px; */
    padding-right: 3rem;
    /* position: absolute; */
    
    display: flex;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    /* left: ${props => props.left};
    right: ${props => props.right}; */
    width: ${props => props.width};
    height: ${props => props.height};
    grid-area: header;

`

export const StyledSearchContainer = styled.div `

    width: 15rem;
    display: flex;
    justify-content: flex-end;
    justify-self: flex-start;
    /* border-radius: 5px; */
    background-color: rgb(247,247,247);
    border: none;
    border-bottom: 1px solid gray;
    margin: 1.5rem;

`

export const StyledSearchInput = styled.input `

    width: 100%;
    /* border-radius: 5px; */
    background-color: rgb(247,247,247);
    border: none;
    direction: rtl;

    :focus {
        outline: none;
    }

`

export const StyledGrid = styled.div `

    height: 100%;
    width: 100%;
    display: grid;
    grid-gap: 10px;
    /* grid-template-rows: 1fr 4fr 1fr; */
    grid-template-areas:    "header header header"
                            "main main main"
                            "footer footer footer";
    background-color: transparent;

    @media (max-width: 1000px) {
        grid-gap: 0px;
        /* grid-template-rows: 1fr; */
    }
`

export const StyledFooter = styled.footer `

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    grid-area: footer;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: rgb(247,247,247);
    /* height:120px; */
    

`

export const StyledSide = styled.div `

    /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
    min-width: 14rem;
    grid-area: side-bar;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: start;
    border-radius: 6px;
    /* background-color: rgb(247,247,247); */
    background-color: transparent;
    @media (max-width: 470px) {
        display: none;
    }

`

export const StyledNav = styled.div `

    /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
    /* grid-area: nav-bar; */
    width: 100%;
    display: flex;
    /* text-align: center; */
    /* justify-self: center; */
    justify-content: flex-end;
    align-items: center;
    /* background-color: rgb(247,247,247); */
    align-self: start;
    background-color: transparent;
    /* min-height: 400px; */
    /* border-radius: 6px; */
    /* min-width: 14rem; */
    @media (max-width: 470px) {
        display: none;
    }


`

export const StyledNavItem = styled.div `

`;

export const StyledMain = styled.div `

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    grid-area: main;
    justify-self: center;
    display: flex;
    width: 80%;
    height: 100%;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    background-color: rgb(247,247,247);
    border-radius: 6px;
    @media (max-width: 1000px) {
        /* overflow: none; */
        width: 100%;
        border-radius: 0px;
        box-shadow: 0;
    }
    

`

export const StyledList = styled.ul `

    list-style-type: none;
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    direction: rtl;

`

export const StyledItem = styled.li `

    padding: 10px;
    position: relative;
    :hover {
        background-color: #A0C9E5;
    }
`

export const StyledCollapsed = styled.li `

    padding: 10px 25px 10px 0px;
    font-size: 0.9375rem;
    display: none;
    overflow: hidden;
    color: #555555;
    ${props => props.open === true && css `
        display: block;
    `}
    :hover {
        background-color: #A0C9E5;
    }
`

export const StyledLoginItem = styled.li `

    margin: 15px 3px;
    /* border-bottom: 1px solid gray; */

`

export const StyledAnchor = styled.a `

    padding: 8px 16px;
    text-decoration: none;
    color: ${props => props.color};

`

export const StyledArrow = styled.i `

    border: solid black;
    border-width: 0 3px 3px 0;
    position: absolute;
    left: 15px;
    top: 40%;
    padding: 3px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    float: left;
    ${props => props.open === true && css `
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    `}

`


export const StyledCategoryDevider = styled.div `

    display: flex;
    padding-right: 5rem;
    padding-top: 4rem;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    font-weight: bold;
    font-size: 2rem;
    @media (max-width: 470px) {
        /* justify-content: ; */
        padding-right: 1.5rem;
        padding-top: 3rem;
        /* padding-top: 0px; */
    }

`


export const StyledFooterImage = styled.img `

    height: 100px;
    margin: 5px 20px;
    width: 110px;
    /* height: 40px; */

`