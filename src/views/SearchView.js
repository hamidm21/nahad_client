import React, { Component } from 'react';
import { List } from '../components/List';
import { Header, Footer, SearchBar, NavDrawer } from '../components/Basic';
import { StyledGrid, StyledMain } from '../styles/Basic';
import { StyledPagination, StyledPageAnchor } from '../styles/Button';
// moment.loadPersian([{dialect: 'persian-modern'}])

export class SearchView extends Component {
    render() {
        const { news } = this.props;
        const pagesList = [];
        for (let i = 1; i <= this.props.pages; i++) {
            pagesList.push(i)
        }
        pagesList.reverse();

        return(
            <StyledGrid>
                <Header />
                {/* <NavBar /> */}
                    <StyledMain>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', width: '100%'}} >
                        <SearchBar onChangeHandler={this.props.onChangeHandler} search_value={this.props.search_value} />
                        <NavDrawer />
                    </div>
                    <List news={news} />
                    <StyledPagination>
                        {
                            pagesList.map(page => {
                                return (
                                <StyledPageAnchor onClick={e => this.props.onPaginate(e, page)}>
                                    {page}
                                </StyledPageAnchor>
                                )
                            })
                        }
                    </StyledPagination>
                </StyledMain>
                <Footer />
            </StyledGrid>
        )
    }
}