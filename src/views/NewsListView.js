import React, { Component } from 'react';
import { List } from '../components/List';
import { Header, Footer, SideBar, NavBar } from '../components/Basic';
import { StyledGrid, StyledMain } from '../styles/Basic';

export class NewsListView extends Component {
    render() {
        return(
            <StyledGrid>
                <Header />
                <NavBar />
                <StyledMain>
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                </StyledMain>
                <SideBar />
                <Footer />
            </StyledGrid>
        )
    }
}