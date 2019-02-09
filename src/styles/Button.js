import styled, {
    css
} from 'styled-components';


export const StyledSubmitForm = styled.button `

    height: 56px;
    font-family: IRANSans;
    font-size: 20px;
    border-radius: 4px;
    min-width: 290px;
    max-width: 290px;
    font-weight: 500;
    display: block;
    margin: 40px auto 8px;
    background-color: rgb(53, 131, 224);
    border: none;
    color: white;
    padding-top: 15px;
    padding-bottom: 18px;
    transition-duration: 0.4s;
    cursor: pointer;

`

export const StyledFormButton = styled.button `

    font-family: IRANSans;
    font-size: 17px;
    font-weight: bold;
    width: 100px;
    height: 40px;
    color: rgb(53, 131, 224);
    background-color: transparent;
    border: none;
    border-radius: 10px;
    
    :hover {
        background-color: rgb(247, 247, 247);
    }


`