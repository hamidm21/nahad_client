import React, { Component } from 'react';
import { StyledCategory, StyledContainer, StyledAnchor } from '../styles/Card';

export class Category extends Component {
    render() {
        return (
            <StyledContainer>
            <StyledCategory>
                <StyledAnchor href={'/newslist/main'}>
                    {this.props.name1}
                </StyledAnchor>
            </StyledCategory>
            <StyledCategory>
                <StyledAnchor href={'/newslist/main'}>
                    {this.props.name2}
                </StyledAnchor>
            </StyledCategory>
            <StyledCategory>
                <StyledAnchor href={'/newslist/main'}>
                    {this.props.name3}
                </StyledAnchor>
            </StyledCategory>
            </StyledContainer>
        )
    }
}
