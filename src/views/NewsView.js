import React, { Component } from 'react';
import { FullNews } from '../components/News';
import { Header, Footer, SideBar, NavBar } from '../components/Basic';
import { StyledGrid, StyledMain } from '../styles/Basic';

export class NewsView extends Component {
    render() {
        return(
            <StyledGrid>
                <Header />
                <NavBar />
                <StyledMain>
                    <FullNews />
                </StyledMain>
                <SideBar />
                <Footer />
            </StyledGrid>
        )
    }
}