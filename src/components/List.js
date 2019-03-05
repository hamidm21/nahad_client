import React, { Component } from 'react';
import { StyledContainer, StyledNews, StyledNewsInfo, StyledNewsImage, StyledNewsTitle, StyledNewsDiscription, StyledNewsAuthor, StyledNewsDate  } from '../styles/List';
// import { StyledPagination, StyledPageAnchor } from '../styles/Button';
import { Link } from 'react-router-dom';

export class List extends Component {
    render() {
        return(
            <StyledContainer>
                <StyledNews>
                    <StyledNewsImage img={"http://www.goftare.com:4231/"+ this.props.img}/>
                    <StyledNewsInfo>
                        <StyledNewsTitle>
                        <Link style={{textDecoration: 'none', color: 'black'}} to={`/news/${this.props.id}`}>
                            {this.props.title}
                        </Link>
                        </StyledNewsTitle>
                        <StyledNewsDiscription>
                            {this.props.description}
                        </StyledNewsDiscription>
                        <StyledNewsAuthor>
                            نویسنده : {this.props.author}
                        </StyledNewsAuthor>
                        <StyledNewsDate>
                            تاریخ : {this.props.date}
                        </StyledNewsDate>
                    </StyledNewsInfo>
                </StyledNews>
            </StyledContainer>
        )
    }
}