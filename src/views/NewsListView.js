import React, { Component } from 'react';
import { List } from '../components/List';
import { Header, Footer, SideBar, NavBar } from '../components/Basic';
import { StyledGrid, StyledMain } from '../styles/Basic';
import moment from 'moment-jalaali';
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
                        
                    {
                        news.map((news, index) => <List title={news.title} description={news.description.length >= 80 ? news.description.substr(0, 80) + '...' : news.description} author={news.author} date={moment(news.moment, 'jYYYY/jMM/jDD HH:mm').format('jYY/jMM/jDD')} img={news.img} id={news._id} key={index}></List>)
                    }
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