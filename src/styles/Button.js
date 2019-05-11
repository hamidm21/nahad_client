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

export const StyledPagination = styled.div `

    display: flex;
    margin-bottom: 10px;
    min-height: 40px;
    /* background-color: #eee; */
    border: 1px solid gray;
    border-radius: 5px;

`

export const StyledPageAnchor = styled.a `

    color: black;
    padding: 8px 16px;
    text-decoration: none;


    :hover {
        background-color: #ddd;
        border-radius: 5px;
    }


    ${props => props.active && css `

        background-color: rgb(53, 131, 224);
        color: white;
        border-radius: 5px;

    `}
`


export const StyledCategoryButton = styled.div `

    /* position: absolute; */
    /* bottom: 0; */
    /* left: 0; */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.9rem;
    background-color: transparent;
    margin-top: 10px;
    width: 100px;
    height: 8%;
    color: rgb(53, 131, 224);
    border: solid rgb(53, 131, 224) 1px;
    border-radius: 8px;

`