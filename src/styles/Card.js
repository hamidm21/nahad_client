import styled, {
    css
} from 'styled-components';


export const StyledContainer = styled.div `

    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    /* min-height: 300px; */
    align-items: center;

`

export const StyledCategory = styled.div `

    /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
    width: 23rem;
    height: 42rem;
    margin: 1rem;
    position: relative;
    /* border-radius: 8px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    background-color: rgb(247,247,247);
    
    
`


export const StyledCategoryTitle = styled.h4 `

    border-bottom: solid gray 0.5px;
    padding: 5px 0px;
    width: 100%;
    direction: rtl;
    margin-bottom: 0.5rem;

`

export const StyledCategoryMainImage = styled.div `

    background-image: url("data:image/jpeg;base64,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");
    width: 100%;    
    min-height: 150px;
    background-size: cover;
    background-position: 50%;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    /* margin-top:62%; */

`


export const StyledCategoryNewsImage = styled.div `

    position: absolute;
    background-image: url("data:image/jpeg;base64,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");
    width: 45%;    
    min-height: 120px;
    background-size: cover;
    background-position: 50%;
    left: -5px;
    top: -5px;
    border-radius: 8px;

`


export const StyledCategoryNews = styled.div `

    display:flex ;
    width: 100%;
    height: 25%;
    flex-direction: column;
    direction: rtl;
    font-weight: bold;
    position: relative;
    box-shadow: 0 10px 40px 0 rgba(62,57,107,.2),0 2px 9px 0 rgba(62,57,107,.2);
    border-radius: 8px;
    margin-top: 0.5rem;
    

`

export const StyledCategoryMainNews = styled.div `

    display: flex;
    width: 100%;
    /* height: 100%; */
    min-height: 45%;
    flex-direction: column;
    direction: rtl;
    font-family: 'IRANSans';
    font-weight: bold;
    position: relative;
    /* padding-right: 15px; */
    box-shadow: 0 10px 40px 0 rgba(62,57,107,.2),0 2px 9px 0 rgba(62,57,107,.2);
    border-radius: 8px;
    margin-bottom: 10px;

`

export const StyledCategoryNewsTitle = styled.h2 `

    padding: 10px;
    font-size: 1.4rem; 


`

export const StyledCategoryNewsDescription = styled.p `

    padding-right: 10px;
    font-size: 14px;


`

export const StyledCategoryNewsAuthor = styled.p `

    padding-right: 15px;
    color: #b5b5b5;
    font-family: 'IRANSans';
    font-size: 0.9rem;
    padding: 10px;
    position: absolute;
    bottom: 0;
    right: 0;

`

export const StyledCategoryNewsDate = styled.p `

    padding-right: 15px;
    color: rgba(0,0,0,.54);
    color: #b5b5b5;
    font-family: 'IRANSans';
    font-size: 0.9rem;
    padding: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
 
`

export const StyledSideCard = styled.div `

    /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
    width: 90%;
    min-width: 200px;
    height: 70px;
    margin: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

`


export const StyledAnchor = styled.a `

    text-decoration: none;
    color: black;
    z-index: 3;
    position: absolute;
    overflow: auto;
    background-color: #fff;
    // background-color: rgb(0,0,0); /* Fallback color */
    // background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */

`


export const StyledContent = styled.div `

    z-index: 3;
    position: absolute;
    overflow: auto;
    // border-radius: 10px;
    // background-color: rgb(247,247,247);
    // background-color: rgba(0,0,0, 0.1); /* Black w/opacity/see-through */


`

export const StyledImg = styled.div `

    background-image: url("https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi-icmj1P7gAhUE16QKHX0JA18QjRx6BAgBEAU&url=https%3A%2F%2Fdepositphotos.com%2F184712116%2Fstock-illustration-arabic-seamless-blue-pattern-ramadan.html&psig=AOvVaw1SQxgjJYVEZPW5tEJWJ7aQ&ust=1552550652185625");

    z-index: 2;
    /* Add the blur effect */
    /* -webkit-filter: blur(5px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px); */
    height: 100%;
    width: 100%;
    position: reletive;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


`