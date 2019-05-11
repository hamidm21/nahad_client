import React, { Component } from 'react';
import jmoment from 'moment-jalaali';
import { StyledCategoryNewsImage, StyledCategoryNewsDate, StyledCategoryNewsAuthor, StyledCategoryNewsDescription, StyledCategoryNewsTitle, StyledCategory, StyledContainer, StyledCategoryTitle, StyledContent, StyledCategoryMainImage, StyledCategoryMainNews, StyledCategoryNews} from '../styles/Card';
import { Link, WrappedLink } from 'react-router-dom';
import { StyledCategoryButton } from "../styles/Button";

export class Category extends Component {
    render() {
        return (
            <StyledContainer>
                {
                    this.props.category_news.map((news) => 
                    <StyledCategory>
                        <StyledCategoryTitle>
                            {news.name}
                        </StyledCategoryTitle>
                        <StyledCategoryMainNews >
                        <Link style={{textDecoration:'none', color: 'black'}} to={`/news/${news.news[0] ? news.news[0]._id : null}`} >
                            <StyledCategoryMainImage img={news.news[0] ? 'http://www.goftare.com:4231/' + news.news[0].img : null} />
                            </Link>
                            <StyledCategoryNewsTitle>
                                <Link style={{textDecoration:'none',color: 'black'}} to={`/news/${news.news[0] ? news.news[0]._id : null}`} >
                                    {news.news[0] ? news.news[0].title.length > 36 ? news.news[0].title.substr(0, 36) + ' ..' : news.news[0].title : null}
                                </Link>
                            </StyledCategoryNewsTitle>
                            <StyledCategoryNewsDescription>
                            <Link style={{textDecoration:'none',color: 'black'}} to={`/news/${news.news[0] ? news.news[0]._id : null}`} >
                                    {news.news[0] ? news.news[0].description.length > 46 ? news.news[0].description.substr(0, 46) + ' ...' : news.news[0].description: null}
                            </Link>
                            </StyledCategoryNewsDescription>
                            <StyledCategoryNewsAuthor>
                                نویسنده: {news.news[0] ? news.news[0].author : null} 
                            </StyledCategoryNewsAuthor>
                            <StyledCategoryNewsDate>
                                تاریخ : {news.news[0] ? jmoment(news.news[0].moment, 'jYYYY/jMM/jDD HH:mm').format('jYYYY/jMM/jDD') : null}
                            </StyledCategoryNewsDate>
                        </StyledCategoryMainNews>
                        <StyledCategoryNews>
                                <Link style={{textDecoration:'none', color: 'black'}} to={`/news/${news.news[1] ? news.news[1]._id : null}`} >
                            <StyledCategoryNewsImage img={news.news[1] ? 'http://www.goftare.com:4231/' + news.news[1].img : null} />
                                </Link>
                            <StyledCategoryNewsTitle>
                                <Link style={{textDecoration:'none',color: 'black'}} to={`/news/${news.news[1] ? news.news[1]._id : null}`} >
                            {news.news[1] ? news.news[1].title.length > 18 ? news.news[1].title.substr(0, 18) + ' ..' : news.news[1].title : null}
                                </Link>
                            </StyledCategoryNewsTitle>
                            <StyledCategoryNewsDescription>
                                <Link style={{textDecoration:'none', color: 'black'}} to={`/news/${news.news[1] ? news.news[1]._id : null}`} >
                            {news.news[1] ? news.news[1].description.length > 22 ? news.news[1].description.substr(0, 22) + ' ..' : news.news[1].description: null}
                                </Link>
                            </StyledCategoryNewsDescription>
                            <StyledCategoryNewsAuthor>
                            نویسنده: {news.news[1] ? news.news[1].author : null} 
                            </StyledCategoryNewsAuthor>
                            {/* <StyledCategoryNewsDate>
                                تاریخ :  1397/02/03
                            </StyledCategoryNewsDate> */}
                        </StyledCategoryNews>
                         <StyledCategoryNews>
                                <Link style={{textDecoration:'none', color: 'black'}} to={`/news/${news.news[2] ? news.news[2]._id : null}`} >
                            <StyledCategoryNewsImage img={news.news[2] ? 'http://www.goftare.com:4231/' + news.news[2].img : null} />
                                </Link>
                            <StyledCategoryNewsTitle>
                                <Link style={{textDecoration:'none',color: 'black'}} to={`/news/${news.news[2] ? news.news[2]._id : null}`} >
                            {news.news[2] ? news.news[2].title.length > 18 ? news.news[2].title.substr(0, 18) + ' ..' : news.news[2].title : null}
                                </Link>
                            </StyledCategoryNewsTitle>
                            <StyledCategoryNewsDescription>
                                <Link style={{textDecoration:'none', color: 'black'}} to={`/news/${news.news[2] ? news.news[2]._id : null}`} >
                            {news.news[2] ? news.news[2].description.length > 22 ? news.news[2].description.substr(0, 22) + ' ..' : news.news[2].description: null}
                                </Link>
                            </StyledCategoryNewsDescription>
                            <StyledCategoryNewsAuthor>
                            نویسنده: {news.news[2] ? news.news[2].author : null} 
                            </StyledCategoryNewsAuthor>
                            {/* <StyledCategoryNewsDate>
                                تاریخ :  1397/02/03
                            </StyledCategoryNewsDate> */}
                        </StyledCategoryNews>
                        <StyledCategoryButton>
                            <Link style={{textDecoration:'none', color: 'rgb(53, 131, 224)' }} to={`/newsList/${news.name}`} >
                            اخبار بیشتر
                            </Link>
                        </StyledCategoryButton>
                    </StyledCategory>
                    )
                }
            </StyledContainer>
        )
    }
}
