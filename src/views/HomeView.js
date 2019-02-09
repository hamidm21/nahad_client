import React, { Component } from "react";
import { Header, Footer, SideBar, NavBar } from '../components/Basic';
import { StyledGrid, StyledMain } from '../styles/Basic';
import  Slider  from '../components/Slider';
import { Category } from "../components/Card";

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
                <Slider />
                <Category name1='اخبار و فعالیت های نهاد' name2='اخبار فرهنگی دانشگاه' name3='فعالان عرصه فرهنگی' />
                <Category name1='نشریه صوتی و تصویری' name2='معرفی کتاب' name3='...'/>
            </StyledMain>
            <SideBar />
            <Footer />
        </StyledGrid>
        );
    }
}