import styled, {
    css
} from 'styled-components';



export const StyledContainer = styled.div `

    margin-top: 20px;
    width: 85%;
    text-align: center;
    /* overflow: hidden; */

`

export const StyledAnchor = styled.a `

    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
    background: white;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 0 0.5rem 0;
    position: relative;

`
export const StyledArrow = styled.div `

    /* z-index: 2; */
    position: absolute;
    left: ${props => props.left};
    top: 150%;
    /* display: none; */

`


export const StyledNewsTitle = styled.h3 `

    position: absolute;
    top: 160%;
    right: 40px;
    padding: 5px;
    color: white;
    border: solid #0069A1 2px;
    border-radius: 8px;
    direction: rtl;


`

export const StyledNewsDescription = styled.h4 `

    position: absolute;
    top: 160%;
    right: 40px;
    padding: 5px;
    color: white;
    border: solid #0069A1 2px;
    border-radius: 8px;
    direction: rtl;

`

export const StyledSlider = styled.div `

    position: relative;
    width: 100%;
    height: 27rem;
    display: flex;
    overflow: hidden;
    border-radius: 5px;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scroll-snap-points-x: repeat(500px);
    scroll-snap-type: mandatory;
    &:hover ${StyledArrow} {
        transition: top 0.2s;
        top: 45%;
    }

    &:hover ${StyledNewsTitle} {
        transition: top 0.1s;
        top: 72%;
    }

    &:hover ${StyledNewsDescription} {
        transition: top 0.1s;
        top: 85%;
    }

` 

export const StyledSlide = styled.div `

    width: 100%;
    flex-shrink: 0;
    height: 100%;
    display: flex;
    align-items: center;
    background: rgb(53, 131, 224);
    justify-content: center;
    border-radius: 10px;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    /* :target {
        transform: scale(0.8);
    } */


`