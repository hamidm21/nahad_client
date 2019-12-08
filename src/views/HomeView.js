import React, { Component } from "react";
import { Header, Footer, SideBar, NavBar, Nav, NavDrawer, SearchBar} from '../components/Basic';
import { StyledGrid, StyledMain, StyledCategoryDevider} from '../styles/Basic';
import  Slider  from '../components/Slider';
import { Category } from "../components/Card";
import { StyledCategory } from "../styles/Card";

export class HomeView extends Component {
    render() {
        return(
        <StyledGrid>
            <Header />
            <StyledMain>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', width: '100%'}} >
                <SearchBar onChangeHandler={this.props.onChangeHandler} search_value={this.props.search_value} />
                <NavDrawer />
            </div>
                <Slider current_slide={this.props.current_slide} slider_news={this.props.slider_news} nextSlide={this.props.nextSlide} prevSlide={this.props.prevSlide} />
                {/* <StyledCategoryDevider>
                     دسته بندی خبر ها
                </StyledCategoryDevider> */}
                <Category category_news={this.props.category_news} names={['خودرو', 'اپلیکیشن', 'تکنولوژی', 'بازی', 'همه خبر ها', 'علم و دانش' , 'کسب و کار' , 'بررسی']} />  
            </StyledMain>
            <Footer />
        </StyledGrid>
        );
    }
}