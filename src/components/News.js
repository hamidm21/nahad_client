import React, { Component } from 'react';
import { StyledTextContainer, StyledDescription, StyledNewsContainer, StyledNewsImage, StyledNewsTitle, StyledInfoContainer, StyledNewsInfo, StyledSuggestion } from '../styles/News';
import { StyledText } from '../styles/Form';
import moment from 'moment-jalaali';
import { List } from './List';


export class FullNews extends Component {
    render() {
        return (
            <StyledNewsContainer>
                <StyledNewsImage min img={"http://www.goftare.com:4231/"+ this.props.news.img} />
                <StyledInfoContainer>
                    <StyledNewsInfo>
                       نویسنده : {this.props.news.author}
                    </StyledNewsInfo>
                    <StyledNewsInfo>
                      نوشته شده در تاریخ : {this.props.news.moment}
                    </StyledNewsInfo>
                </StyledInfoContainer>
                <StyledNewsTitle>
                    {this.props.news.title}
                </StyledNewsTitle>
                <StyledDescription>
                    {this.props.news.description}
                </StyledDescription>
                <StyledTextContainer>
                    <div dangerouslySetInnerHTML={{__html: this.props.news.text_tag}} />
                </StyledTextContainer>
                <StyledSuggestion>
                    <StyledDescription>
                    مطالب مرتبط
                    </StyledDescription>
                {
                    <List news={this.props.related} />
                }
                </StyledSuggestion>
            </StyledNewsContainer>
        )
    }
}