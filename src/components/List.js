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
                    this.props.news.map((news, index) => 
                    <StyledNews>
                    <StyledNewsImage img={"http://www.goftare.com:4231/"+ news.img}/>
                    <StyledNewsInfo>
                        <StyledNewsTitle>
                        <Link style={{textDecoration: 'none', color: 'black'}} to={`/news/${news.id}`}>
                            {news.title}
                        </Link>
                        </StyledNewsTitle>
                        <StyledNewsDiscription>
                        <Link style={{textDecoration: 'none', color: 'black'}} to={`/news/${news.id}`}>
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
                    )
                }
            </StyledContainer>
        )
    }
}