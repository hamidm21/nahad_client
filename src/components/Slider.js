import React, { Component } from 'react';
import { StyledSlider, StyledSlide, StyledContainer, StyledAnchor } from '../styles/Slider';
import { StyledNewsImage } from '../styles/News';

export default class Slider extends Component {
    render() {
        return (
            <StyledContainer>
                <StyledSlider>
                    <StyledSlide id={"slide1"}>
                        <StyledNewsImage img={"http://www.goftare.com:4231/uploads/img_1551711962993.jpg"} />
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
                    <div>
                        asd
                        <i className="fa fa-arrow-left fa-2x" >asdasd</i>
                    </div>
                </StyledSlider>
            </StyledContainer>
        )
    }
}