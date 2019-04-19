import React, { Component } from 'react';
import { List } from '../components/List';
import { Header, Footer, SideBar, NavBar } from '../components/Basic';
import { StyledGrid, StyledMain } from '../styles/Basic';
import { StyledPagination, StyledPageAnchor } from '../styles/Button';
// moment.loadPersian([{dialect: 'persian-modern'}])

export class NewsListView extends Component {
    render() {
        const { news } = this.props;
        const pagesList = [];
        for (let i = 1; i <= this.props.pages; i++) {
            pagesList.push(i)
        }
        pagesList.reverse();
        // const NewsList = news.map((news, index) => <List title={news.title} description={news.description.substr(0, 170)} author={news.author} date={moment(news.moment, 'jYYYY/jMM/jDD HH:mm').format('jYY/jMM/jDD')} img={news.img} id={news._id} key={index}></List>)

        return(
            <StyledGrid>
                <Header />
                <NavBar />
                    <StyledMain>   
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
                <SideBar />
                <Footer />
            </StyledGrid>
        )
    }
}