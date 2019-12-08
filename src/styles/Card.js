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

    width: 20rem;
    height: 40rem;
    margin: 1rem;
    position: relative;
    /* border-radius: 8px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    background-color: rgb(247,247,247);
    /* @media (min-width: 470px) {
        width: 100%;
    } */
    
`


export const StyledCategoryTitle = styled.h4 `

    border-bottom: solid gray 0.5px;
    padding: 5px 0px;
    width: 100%;
    direction: rtl;
    margin-bottom: 0.5rem;
    color : darkslategrey ;

`

export const StyledCategoryMainImage = styled.div `

    background-image: url(${props => props.img});
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
    background-image: url(${props => props.img});
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
    font-weight: 500 ;
    color : #397cd4  ;
    font-size: 1rem; 


    :hover,:focus {
        text-shadow: 0.5px 2px 5px rgba(0,0,0,0.2);
        }

`

export const StyledCategoryNewsDescription = styled.p `

    padding-right: 10px;
    font-size: 14px;
    font-weight: 400 ;

`

export const StyledCategoryNewsAuthor = styled.p `

    padding-right: 15px;
    color: #b5b5b5;
    font-family: 'IRANSans';
    font-size: 0.6rem;
    padding: 10px;
    position: absolute;
    bottom: 0;
    right: 0;

`

export const StyledCategoryNewsDate = styled.p `

    /* padding-right: 15px; */
    color: rgba(0,0,0,.54);
    color: #b5b5b5;
    font-family: 'IRANSans';
    font-size: 0.6rem;
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
    /* background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.4); Black w/opacity/see-through */

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