import styled, {
    css
} from 'styled-components';

export const StyledContainer = styled.div `
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    padding: 2rem 1rem;
    align-items: flex-start;

`


export const StyledNews = styled.div `

    display: flex;
    margin: 1rem 0.5rem;
    width: 80%;
    height: 13rem;
    background-color: #e1e1e1;
    border-radius: 8px;
    flex-grow: 1;
    max-width: 43rem;
    min-width: 35rem;
    box-shadow: 0 6px 10px 0 rgba(62,57,107,.2),0 2px 9px 0 rgba(62,57,107,.2);
    :hover {
        box-shadow: 0 10px 40px 0 rgba(62,57,107,.2),0 2px 9px 0 rgba(62,57,107,.2);
        cursor: pointer;
    }

`

export const StyledNewsInfo = styled.div `

    display: flex;
    width: 50%;
    flex-direction: column;
    padding: 30px 30px 30px 20px;
    direction: rtl;
    position: relative;

`


export const StyledNewsImage = styled.div `

    position: relative;
    left: -5px;
    background-size: cover;
    background-position: 50%;
    background-color: #b5b5b5;
    background-image: url(${props => props.img});
    margin-top: -10px;
    border-radius: 5px;
    will-change: transform;
    -webkit-transition: -webkit-transform .3s cubic-bezier(.52,.28,.47,1.15);
    transition: -webkit-transform .3s cubic-bezier(.52,.28,.47,1.15);
    transition: transform .3s cubic-bezier(.52,.28,.47,1.15);
    transition: transform .3s cubic-bezier(.52,.28,.47,1.15),-webkit-transform .3s cubic-bezier(.52,.28,.47,1.15);
    -webkit-box-shadow: 0 10px 40px 0 rgba(62,57,107,.2),0 2px 9px 0 rgba(62,57,107,.2);
    box-shadow: 0 10px 40px 0 rgba(62,57,107,.2),0 2px 9px 0 rgba(62,57,107,.2);
    width: 50%;
    height: 160px;

`

export const StyledNewsDate = styled.span `

    color: #b5b5b5;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 10px;
    font-size: 16px;


`

export const StyledNewsTitle = styled.h1 `
    font-size: 17px;
    font-weight: bold;
    padding-top: 10px;

`

export const StyledNewsAuthor = styled.span `

    color: #b5b5b5;
    margin-top: 10px;
    padding: 10px;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 16px;


`

export const StyledNewsDiscription = styled.p `

    font-size: 14px;
    padding: 10px;

`