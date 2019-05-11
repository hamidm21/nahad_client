import styled, {
    css
} from 'styled-components';

export const StyledNewsContainer = styled.div `

    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 440px;
    align-items: center;
    
    /* max-width: 800px; */
`

export const StyledNewsImage = styled.div `

    background-image: url(${props => props.img});
    width: 100%;
    background-position: 50%;
    background-size: cover;
    height: 100%;
    ${props => props.min && css `
        min-height: 600px;
    `}
    border-radius: 5px;

    @media (max-width: 460px) {
        min-height: 300px;
        border-radius: 0px;
    }

`

export const StyledDescription = styled.h3 `

    padding: 20px 20px;
    /* font-size: 16px; */
    color: #4F5052;
    direction: rtl;

`

export const StyledNewsTitle = styled.h1 `

    padding: 30px 20px;
    direction: rtl;
    @media (max-width: 460px) {
        padding: 10px 10px;
    }

`

export const StyledInfoContainer = styled.div `

    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #b5b5b5;
    /* direction: rtl; */

`

export const StyledNewsInfo = styled.p `

    padding: 40px 50px;
    direction: rtl;
    @media (max-width: 460px) {
        padding: 10px 10px;
    }

`


export const StyledTextContainer = styled.div `

    width: 80%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    direction: rtl;
    /* @media (max-width: 460px) {
        width: 90%;
    } */

`


export const StyledSuggestion = styled.h3 `

    margin: 20px 20px;
    width: 100%;
    height: 100%

`