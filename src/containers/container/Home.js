import React, { Component } from 'react';
import { connect } from "react-redux";
import { HomeView } from '../../views/HomeView';
import { fetchSliderNews, fetchCategoryNews } from '../../actions/Home/actions';
import { toggleCollapse, nextSlide, prevSlide } from '../../actions/Home/actionCreators';


class Home extends Component {
    constructor(props) {
        super(props)
        this.onToggle = this.onToggle.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    componentDidMount() {
        this.props.fetchSliderNews()
    }

    nextSlide() {
        this.props.nextSlide();
    }

    prevSlide() {
        this.props.prevSlide();
    }

    onToggle(e, id) {
        e.preventDefault()
        this.props.onToggle(id);
    }

    render() {
        return (
           <HomeView 
                onToggle={this.onToggle}
                toggle_id={this.props.toggle_id}
                nextSlide={this.nextSlide}
                prevSlide={this.prevSlide}
                slider_news={this.props.slider_news}
                current_slide={this.props.current_slide}
                category_news={this.props.category_news}
           />
        );
      }
}


const mapStateToProps = state => {
    return {
        toggle_id: state.home.toggle_id,
        slider_news: state.home.slider_news,
        current_slide: state.home.current_slide,
        category_news: state.home.category_news
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onToggle: id => {
            dispatch(toggleCollapse(id))
        },
        nextSlide: () => {
            dispatch(nextSlide())
        },
        prevSlide: () => {
            dispatch(prevSlide())
        },
        fetchSliderNews: () => {
            dispatch(fetchSliderNews())
        },
        fetchCategoryNews: ()=> {
            dispatch(fetchCategoryNews())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);