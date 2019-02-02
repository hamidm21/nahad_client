import React, { Component } from "react";
import { Header, Footer, SideBar, NavBar } from '../components/Basic';
import { StyledGrid, StyledMain } from '../styles/Basic';
import  Slider  from '../components/Slider';

export class HomeView extends Component {
    render() {
        return(
        <StyledGrid>
            <Header />
            <NavBar />
            <StyledMain>
                <Slider />
            </StyledMain>
            <SideBar />
            <Footer />
        </StyledGrid>
        );
    }
}