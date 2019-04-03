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
            {/* <NavBar  */}
                {/* onToggle={this.props.onToggle} */}
                {/* toggle_id={this.props.toggle_id} */}
            {/* /> */}
            <StyledMain>
                <Slider current_slide={this.props.current_slide} slider_news={this.props.slider_news} nextSlide={this.props.nextSlide} prevSlide={this.props.prevSlide} />
                <StyledCategoryDevider>
                     دسته بندی خبر ها
                </StyledCategoryDevider>
                <Category name1='اخبار و فعالیت های نهاد' name2='اخبار فرهنگی دانشگاه' name3='فعالان عرصه فرهنگی' /> 
                <Category name1='نشریه صوتی و تصویری' name2='معرفی کتاب' name3='همه خبر ها'/> 
            </StyledMain>
            {/* <SideBar /> */}
            <Footer />
        </StyledGrid>
        );
    }
}