import styled, {
    css
} from 'styled-components';


export const StyledContainer = styled.div `

    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;

`

export const StyledCategory = styled.div `

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    width: 250px;
    height: 140px;
    margin: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;

`


export const StyledSideCard = styled.div `

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    width: 90%;
    min-width: 200px;
    height: 70px;
    margin: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

`


export const StyledAnchor = styled.a `

    text-decoration: none;
    color: black;

`