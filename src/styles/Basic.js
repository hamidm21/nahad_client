import styled, {
    css
} from 'styled-components';


export const StyledHeader = styled.div `
    
    grid-area: header;
    position: relative;
    display: flex;
    width: 100%;
    min-height: 140px;
    justify-content: space-between;
    align-items: center;
    // box-shadow: 0 1px 2px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
    // background-color: rgb(247,247,247);
    background-color: transparent;

`

export const StyledImg = styled.img `
    
    grid-column-start: ${props => props.start};
    padding: 0px 20px;
    position: absolute;
    left: ${props => props.left};
    right: ${props => props.right};
    width: ${props => props.width};
    height: ${props => props.height};
    grid-area: header;

`

export const StyledGrid = styled.div `

    height: 100%;
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-rows: 1fr 4fr 1fr;
    grid-template-areas:    "header header header header header"
                            "side-bar main main main nav-bar"
                            "footer footer footer footer footer";
    background-color: transparent;

`

export const StyledFooter = styled.footer `

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    grid-area: footer;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: rgb(247,247,247);
    height:120px;
    

`

export const StyledSide = styled.div `

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    min-width: 16rem;
    grid-area: side-bar;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: start;
    border-radius: 6px;
    background-color: rgb(247,247,247);

`

export const StyledNav = styled.div `

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    grid-area: nav-bar;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(247,247,247);
    align-self: start;
    min-height: 400px;
    border-radius: 6px;
    min-width: 220px;


`

export const StyledMain = styled.div `

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    grid-area: main;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    background-color: rgb(247,247,247);
    border-radius: 6px;
    

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

`


export const StyledFooterImage = styled.img `

    height: 100px;
    margin: 0px 4px;

`