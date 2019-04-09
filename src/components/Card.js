import React, { Component } from 'react';
import { StyledCategoryNewsImage, StyledCategoryNewsDate, StyledCategoryNewsAuthor, StyledCategoryNewsDescription, StyledCategoryNewsTitle, StyledCategory, StyledContainer, StyledCategoryTitle, StyledContent, StyledCategoryMainImage, StyledCategoryMainNews, StyledCategoryNews} from '../styles/Card';
import { Link } from 'react-router-dom';
import { StyledCategoryButton } from "../styles/Button";

export class Category extends Component {
    render() {
        return (
            <StyledContainer>
                {
                    this.props.names.map((name) => <Link style={{textDecoration:'none', color: 'black' }} to={`/newsList/${name}`} >
                    <StyledCategory>
                        <StyledCategoryTitle>
                            {name}
                        </StyledCategoryTitle>
                        <StyledCategoryMainNews>
                            <StyledCategoryMainImage>
                            
                            </StyledCategoryMainImage>
                            <StyledCategoryNewsTitle>
                                    تیتر خبر
                            </StyledCategoryNewsTitle>
                            <StyledCategoryNewsDescription>
                                توضیحات خبر اووووو یه 
                            </StyledCategoryNewsDescription>
                            <StyledCategoryNewsAuthor>
                                نویسنده: رضا رازانی
                            </StyledCategoryNewsAuthor>
                            <StyledCategoryNewsDate>
                                تاریخ :  1397/02/03
                            </StyledCategoryNewsDate>
                        </StyledCategoryMainNews>
                        <StyledCategoryNews>
                            <StyledCategoryNewsImage>
        
                            </StyledCategoryNewsImage>
                            <StyledCategoryNewsTitle>
                                تیتر خبر
                            </StyledCategoryNewsTitle>
                            <StyledCategoryNewsDescription>
                                توضیحات خبر اووووو یه 
                            </StyledCategoryNewsDescription>
                            <StyledCategoryNewsAuthor>
                                نویسنده: رضا رازانی
                            </StyledCategoryNewsAuthor>
                            {/* <StyledCategoryNewsDate>
                                تاریخ :  1397/02/03
                            </StyledCategoryNewsDate> */}
                        </StyledCategoryNews>
                        <StyledCategoryNews>
                            <StyledCategoryNewsImage>
        
                            </StyledCategoryNewsImage>
                            <StyledCategoryNewsTitle>
                                تیتر خبر
                            </StyledCategoryNewsTitle>
                            <StyledCategoryNewsDescription>
                                توضیحات خبر اووووو یه 
                            </StyledCategoryNewsDescription>
                            <StyledCategoryNewsAuthor>
                                نویسنده: رضا رازانی
                            </StyledCategoryNewsAuthor>
                            {/* <StyledCategoryNewsDate>
                                تاریخ :  1397/02/03
                            </StyledCategoryNewsDate> */}
                        </StyledCategoryNews>
                        <StyledCategoryButton>
                            اخبار بیشتر
                        </StyledCategoryButton>
                    </StyledCategory>
                    </Link>
                    )
                }
            {/* <Link style={{textDecoration:'none', color: 'black' }} to={`/newsList/${this.props.names[1]}`} >
            <StyledCategory>
                <StyledCategoryTitle>
                        {this.props.names[1]}
                </StyledCategoryTitle>
                <StyledCategoryMainNews>
                    <StyledCategoryMainImage>
                    
                    </StyledCategoryMainImage>
                    <StyledCategoryNewsTitle>
                            تیتر خبر
                    </StyledCategoryNewsTitle>
                    <StyledCategoryNewsDescription>
                        توضیحات خبر اووووو یه 
                    </StyledCategoryNewsDescription>
                    <StyledCategoryNewsAuthor>
                        نویسنده: رضا رازانی
                    </StyledCategoryNewsAuthor>
                    <StyledCategoryNewsDate>
                        تاریخ :  1397/02/03
                    </StyledCategoryNewsDate>
                </StyledCategoryMainNews>
                <StyledCategoryNews>
                    <StyledCategoryNewsImage>

                    </StyledCategoryNewsImage>
                    <StyledCategoryNewsTitle>
                        تیتر خبر
                    </StyledCategoryNewsTitle>
                    <StyledCategoryNewsDescription>
                        توضیحات خبر اووووو یه 
                    </StyledCategoryNewsDescription>
                    <StyledCategoryNewsAuthor>
                        نویسنده: رضا رازانی
                    </StyledCategoryNewsAuthor>
                    <StyledCategoryNewsDate>
                        تاریخ :  1397/02/03
                    </StyledCategoryNewsDate>
                </StyledCategoryNews>
                <StyledCategoryNews>
                    <StyledCategoryNewsImage>

                    </StyledCategoryNewsImage>
                    <StyledCategoryNewsTitle>
                        تیتر خبر
                    </StyledCategoryNewsTitle>
                    <StyledCategoryNewsDescription>
                        توضیحات خبر اووووو یه 
                    </StyledCategoryNewsDescription>
                    <StyledCategoryNewsAuthor>
                        نویسنده: رضا رازانی
                    </StyledCategoryNewsAuthor>
                    <StyledCategoryNewsDate>
                        تاریخ :  1397/02/03
                    </StyledCategoryNewsDate>
                </StyledCategoryNews>
                <StyledCategoryButton>
                    اخبار بیشتر
                </StyledCategoryButton>
            </StyledCategory>
            </Link>
            <Link style={{textDecoration:'none', color: 'black' }} to={`/newsList/${this.props.names[2]}`} >
            <StyledCategory>
                <StyledCategoryTitle>
                        {this.props.names[2]}
                </StyledCategoryTitle>
                <StyledCategoryMainNews>
                    <StyledCategoryMainImage>
                    
                    </StyledCategoryMainImage>
                    <StyledCategoryNewsTitle>
                            تیتر خبر
                    </StyledCategoryNewsTitle>
                    <StyledCategoryNewsDescription>
                        توضیحات خبر اووووو یه 
                    </StyledCategoryNewsDescription>
                    <StyledCategoryNewsAuthor>
                        نویسنده: رضا رازانی
                    </StyledCategoryNewsAuthor>
                    <StyledCategoryNewsDate>
                        تاریخ :  1397/02/03
                    </StyledCategoryNewsDate>
                </StyledCategoryMainNews>
                <StyledCategoryNews>
                    <StyledCategoryNewsImage>

                    </StyledCategoryNewsImage>
                    <StyledCategoryNewsTitle>
                        تیتر خبر
                    </StyledCategoryNewsTitle>
                    <StyledCategoryNewsDescription>
                        توضیحات خبر اووووو یه 
                    </StyledCategoryNewsDescription>
                    <StyledCategoryNewsAuthor>
                        نویسنده: رضا رازانی
                    </StyledCategoryNewsAuthor>
                    <StyledCategoryNewsDate>
                        تاریخ :  1397/02/03
                    </StyledCategoryNewsDate>
                </StyledCategoryNews>
                <StyledCategoryNews>
                    <StyledCategoryNewsImage>

                    </StyledCategoryNewsImage>
                    <StyledCategoryNewsTitle>
                        تیتر خبر
                    </StyledCategoryNewsTitle>
                    <StyledCategoryNewsDescription>
                        توضیحات خبر اووووو یه 
                    </StyledCategoryNewsDescription>
                    <StyledCategoryNewsAuthor>
                        نویسنده: رضا رازانی
                    </StyledCategoryNewsAuthor>
                    <StyledCategoryNewsDate>
                        تاریخ :  1397/02/03
                    </StyledCategoryNewsDate>
                </StyledCategoryNews>
                <StyledCategoryButton>
                    اخبار بیشتر
                </StyledCategoryButton>
            </StyledCategory>
            </Link> */}
            </StyledContainer>
        )
    }
}
