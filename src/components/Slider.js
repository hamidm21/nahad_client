import React, { Component } from 'react';
import { StyledSlider, StyledSlide, StyledContainer, StyledAnchor } from '../styles/Slider';

export default class Slider extends Component {
    render() {
        return (
            <StyledContainer>
                <StyledAnchor href={"#slide1"}>
                    1
                </StyledAnchor>
                <StyledAnchor href={"#slide2"}>
                    2
                </StyledAnchor>
                <StyledAnchor href={"#slide3"}>
                    3
                </StyledAnchor>
                <StyledSlider>
                    <StyledSlide id={"slide1"}>
                        <h1>
                            1
                        </h1>
                    </StyledSlide>
                    <StyledSlide id={"slide2"}>
                        <h1>
                            2
                        </h1>
                    </StyledSlide>
                    <StyledSlide id={"slide3"}>
                        <h1>
                            3
                        </h1>
                    </StyledSlide>
                </StyledSlider>
            </StyledContainer>
        )
    }
}