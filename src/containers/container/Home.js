import React, { Component } from 'react';
import { connect } from "react-redux";
import { HomeView } from '../../views/HomeView';
import { fetchSliderNews, fetchCategoryNews } from '../../actions/Home/actions';
import { toggleCollapse, nextSlide, prevSlide, onChange, submitChange } from '../../actions/Home/actionCreators';
import loading from '../../assets/loading/Spin-1.3s-200px.svg'


class Home extends Component {
    constructor(props) {
        super(props)
        this.onToggle = this.onToggle.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.onChange = this.onChange.bind(this);
        this.submitChange = this.submitChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchSliderNews()
        this.props.fetchCategoryNews()
    }

    onChange(e) {
        this.props.onChange(e.target.value);
    }

    submitChange() {
        this.props.submitChange();
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
        return this.props.loading || !this.props.category_news ? 
        <div>
          <img style={{ width: '120px', height: '120px', position: 'fixed', top:'45%', left:'45%' }} src={loading}/>
        </div> :
        (
            <HomeView 
            onToggle={this.onToggle}
            toggle_id={this.props.toggle_id}
            nextSlide={this.nextSlide}
            prevSlide={this.prevSlide}
            slider_news={this.props.slider_news}
            current_slide={this.props.current_slide}
            category_news={this.props.category_news}
            onChangeHandler={this.onChange}
            search_value={this.props.search_value}
       />
       )
      }
}


const mapStateToProps = state => {
    return {
        toggle_id: state.home.toggle_id,
        slider_news: state.home.slider_news,
        current_slide: state.home.current_slide,
        category_news: state.home.category_news,
        loading: state.home.loading,
        search_value: state.home.search_value
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
        },
        onChange: value => {
            dispatch(onChange(value))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);