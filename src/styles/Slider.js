import styled, {
    css
} from 'styled-components';



export const StyledContainer = styled.div `

    padding-top: 10px;
    width: 500px;
    text-align: center;
    overflow: hidden;

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
export const StyledSlider = styled.div `

    width: 500px;
    height: 300px;
    display: flex;
    overflow: hidden;
    border-radius: 5px;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scroll-snap-points-x: repeat(500px);
    scroll-snap-type: mandatory;


` 

export const StyledSlide = styled.div `

    width: 500px;
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