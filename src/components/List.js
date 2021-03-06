import React, { Component } from 'react';
import moment from 'moment-jalaali';
import { StyledContainer, StyledNews, StyledNewsInfo, StyledNewsImage, StyledNewsTitle, StyledNewsDiscription, StyledNewsAuthor, StyledNewsDate  } from '../styles/List';
// import { StyledPagination, StyledPageAnchor } from '../styles/Button';
import { Link } from 'react-router-dom';

export class List extends Component {
    render() {
        return(
            <StyledContainer>
                {
                    this.props.news.map((news) => 
                    <StyledNews>
                    <StyledNewsImage img={"http://46.105.163.141:4231/"+ news.img}    onClick={()=>{
                           window.location.replace(`/news/${news._id}`);
                        }}  />
                    <StyledNewsInfo>
                        <StyledNewsTitle>
                        <a style={{textDecoration: 'none', color: 'black'}} href={`/news/${news._id}`} >
                            {news.title}
                        </a>
                        </StyledNewsTitle>
                        <StyledNewsDiscription>
                        <Link style={{textDecoration: 'none', color: 'black'}} to={`/news/${news._id}`}>
                            {news.description.length >= 80 ? news.description.substr(0, 80) + '...' : news.description}
                            </Link>
                        </StyledNewsDiscription>
                        <StyledNewsAuthor>
                            نویسنده : {news.author}
                        </StyledNewsAuthor>
                        <StyledNewsDate>
                            تاریخ : {moment(news.moment, 'jYYYY/jMM/jDD HH:mm').format('jYY/jMM/jDD')}
                        </StyledNewsDate>
                    </StyledNewsInfo>
                </StyledNews>
                // key={index}
                    )
                }
            </StyledContainer>
        )
    }
}