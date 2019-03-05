import React, { Component } from 'react';
import { StyledCategory, StyledContainer, StyledAnchor } from '../styles/Card';
import { Link } from 'react-router-dom';

export class Category extends Component {
    render() {
        return (
            <StyledContainer>
            <StyledCategory>
                <StyledAnchor>
                    <Link style={{textDecoration:'none', color: 'black'}} to={`/newsList/${this.props.name1}`} >
                        {this.props.name1}
                    </Link>
                </StyledAnchor>
            </StyledCategory>
            <StyledCategory>
                <StyledAnchor>
                    <Link style={{textDecoration:'none', color: 'black'}} to={`/newsList/${this.props.name2}`} >
                        {this.props.name2}
                    </Link>
                </StyledAnchor>
            </StyledCategory>
            <StyledCategory>
                <StyledAnchor>
                    <Link style={{textDecoration:'none', color: 'black'}} to={`/newsList/${this.props.name3}`} >
                        {this.props.name3}
                    </Link>
                </StyledAnchor>
            </StyledCategory>
            </StyledContainer>
        )
    }
}
