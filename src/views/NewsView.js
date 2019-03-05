import React, { Component } from 'react';
import { FullNews } from '../components/News';
import { Header, Footer, SideBar, NavBar } from '../components/Basic';
import { StyledGrid, StyledMain } from '../styles/Basic';
import loading from '../assets/loading/Spin-1.3s-200px.svg'

export class NewsView extends Component {
    render() {
        return(
            <StyledGrid>
                <Header />
                    <NavBar />
                        <StyledMain>
                            <FullNews news={this.props.news} related={this.props.related} />
                        </StyledMain>
                    <SideBar />
                <Footer />
            </StyledGrid>
        )
    }
}