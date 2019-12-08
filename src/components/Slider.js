import React, { Component } from 'react';
import { StyledSlider, StyledSlide, StyledContainer, StyledNewsTitle, StyledArrow, StyledNewsDescription } from '../styles/Slider';
import { StyledNewsImage } from '../styles/News';
import { Link } from 'react-router-dom';

export default class Slider extends Component {
    render() {
        const Slide = () => {
           return (
            <StyledSlide>
                <StyledNewsImage img={"http://46.105.163.141:4231/"+ this.props.slider_news[this.props.current_slide].img} />
                <Link to={`/news/${this.props.slider_news[this.props.current_slide]._id}`} >
                <StyledNewsTitle>{this.props.slider_news[this.props.current_slide].title}</StyledNewsTitle>
                </Link>
                <Link to={`/news/${this.props.slider_news[this.props.current_slide]._id}`} >
                <StyledNewsDescription>{this.props.slider_news[this.props.current_slide].description.length >= 100 ? this.props.slider_news[this.props.current_slide].description.substr(0, 100) + '...': this.props.slider_news[this.props.current_slide].description}</StyledNewsDescription>
                </Link>
            </StyledSlide>
           )
        }

        const LeftArrow = () => {
            return (
                <StyledArrow onClick={this.props.nextSlide} left >
                    <i class="fas fa-arrow-left fa-2x"></i>
                </StyledArrow>
            )
        }

        const RightArrow = () => {
            return (
                <StyledArrow onClick={this.props.prevSlide} right >
                    {/* <i class="far fa-arrow-alt-circle-right fa-3x"></i> */}
                    <i class="fas fa-arrow-right fa-2x"></i>
                </StyledArrow>
            )
        }
        return (
            <StyledContainer>
                <StyledSlider>
                    <Slide />
                    <LeftArrow />
                    <RightArrow />
                </StyledSlider>
            </StyledContainer>
        )
    }
}