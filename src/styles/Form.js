import styled, {
    css
} from 'styled-components';

export const StyledMain = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgb(247, 247, 247);
    box-sizing: border-box;

`

export const StyledContainer = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 400px;
    height: ${props => props.height};
    background-color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1), 0 2px 5px rgba(0,0,0,0.11);

`

export const StyledForm = styled.form `

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 300px;
    margin: 20px auto;

`

export const StyledFieldSet = styled.fieldset `

    margin: 25px 0px;
    height: 40px;
    width: 100%;
    position: relative;
    border: none;
    display: flex;
    

`

export const StyledLabel = styled.label `

    position: absolute;  
    top: 18px;
    right: 0px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.3);
    transform-origin: left;
    transition: all 0.3s ease;


`

export const StyledAfter = styled.div `

    width: 100%;
    height: 2px;
    background: linear-gradient(to right, rgb(53, 131, 224) 50%, transparent 50%);
    background-color: rgba(0, 0, 0, 0.3);
    background-size: 200% 100%;
    background-position: 100% 0;
    transition: all 0.6s ease;

`

export const StyledText = styled.h3 `

    align-self: flex-end;
    margin: 0px 40px;
    font-size: 18px;

`

export const StyledDiscription = styled.p `

    font-size: 14px;
    align-self: flex-end;
    margin: 20px 30px 0px 10px;
    color: gray;

`


export const StyledInput = styled.input `

    font-size: 16px;  
    width: 100%;
    height: 35px;
    border: none;  
    margin-top: 10px;

    :focus {
        outline: none;
    }
    &:focus ~ ${StyledAfter} , &:focus ~ ${StyledLabel}{
        background-position: 0 0;
        color: rgb(53, 131, 224);
    }
    &:focus  ~ ${StyledLabel} , &:valid ~ ${StyledLabel} {
        transform: scale(0.7, 0.7);
        top: 0;
        right: 0;
    }

    /* &:invalid ~ ${StyledLabel} {
        color: red
    }
    
    &:invalid ~ ${StyledAfter}{
        background: linear-gradient(to right, red 50%, transparent 50%);
    } */

    /* &:valid ~ ${StyledLabel} {
        transform: scale(0.7, 0.7);
        top: 0;
        left: 0;
    } */
    /* &:valid ~ ${StyledLabel}{
        transform: scale(0.7, 0.7);
        top: 0;
        left: 0;
    } */

`

export const StyledLink = styled.a `

    position: absolute;
    text-decoration: none;
    top: 0;
    left: 0;
    margin-top: 20px;
    margin-left: 20px;
    border: none;

`


export const StyledLinkRight = styled.a `

    position: absolute;
    text-decoration: none;
    top: 0;
    right: 0;
    margin-top: 20px;
    margin-right: 20px;
    border: none;

`