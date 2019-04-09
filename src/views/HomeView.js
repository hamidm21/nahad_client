import React, { Component } from "react";
import { Header, Footer, SideBar, NavBar} from '../components/Basic';
import { StyledGrid, StyledMain, StyledCategoryDevider} from '../styles/Basic';
import  Slider  from '../components/Slider';
import { Category } from "../components/Card";
import { StyledCategory } from "../styles/Card";

export class HomeView extends Component {
    render() {
        return(
        <StyledGrid>
            <Header />
            <NavBar 
                onToggle={this.props.onToggle}
                toggle_id={this.props.toggle_id}
            />
            <StyledMain>
                <Slider current_slide={this.props.current_slide} slider_news={this.props.slider_news} nextSlide={this.props.nextSlide} prevSlide={this.props.prevSlide} />
                <StyledCategoryDevider>
                     دسته بندی خبر ها
                </StyledCategoryDevider>
                <Category names={['اخبار و فعالیت های نهاد', 'اخبار فرهنگی دانشگاه', 'فعالان عرصه فرهنگی', 'نشریه صوتی و تصویری', 'همه خبر ها', 'معرفی کتاب']} />  
            </StyledMain>
            <SideBar />
            <Footer />
        </StyledGrid>
        );
    }
}