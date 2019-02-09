import React, { Component } from 'react';
import { StyledContainer, StyledNews, StyledNewsInfo, StyledNewsImage, StyledNewsTitle, StyledNewsDiscription, StyledNewsAuthor, StyledNewsDate  } from '../styles/List';

export class List extends Component {
    render() {
        return(
            <StyledContainer>
                <StyledNews>
                    <StyledNewsImage />
                    <StyledNewsInfo>
                        <StyledNewsTitle>
                            <a href={'/news/main'} style={{textDecoration: 'none', color: 'black'}}>
                            تیتر خبر
                            </a>
                        </StyledNewsTitle>
                        <StyledNewsDiscription>
                            توضیح خبر
                        </StyledNewsDiscription>
                        <StyledNewsAuthor>
                            نویسنده
                        </StyledNewsAuthor>
                        <StyledNewsDate>
                            ۲۰ مهر
                        </StyledNewsDate>
                    </StyledNewsInfo>
                </StyledNews>
                <StyledNews>
                    <StyledNewsImage />
                    <StyledNewsInfo>
                        <StyledNewsTitle>
                        <a href={'/news/main'} style={{textDecoration: 'none', color: 'black'}}>
                            تیتر خبر
                        </a>
                        </StyledNewsTitle>
                        <StyledNewsDiscription>
                            توضیح خبر
                        </StyledNewsDiscription>
                        <StyledNewsAuthor>
                            نویسنده
                        </StyledNewsAuthor>
                        <StyledNewsDate>
                            ۲۰ مهر
                        </StyledNewsDate>
                    </StyledNewsInfo>
                </StyledNews>
            </StyledContainer>
        )
    }
}