import React, { Component } from 'react';
import { connect } from "react-redux";
import { NewsView } from '../../views/NewsView';
import { fetchNews } from '../../actions/News/actions';
// import { onPaginate } from '../../actions/Home/actionCreators';
import loading from '../../assets/loading/Spin-1.3s-200px.svg'

class News extends Component {
  constructor(props) {
    super(props)
}

  componentDidMount() {
    this.props.fetchNews(this.props.match.params.id)
  }

  render() {
      return this.props.loading || !this.props.related ? (
        <div>
          <img style={{ width: '120px', height: '120px', position: 'fixed', top:'45%', left:'45%' }} src={loading}/>
        </div>
      ) : (
        <NewsView
          news={this.props.news}
          related={this.props.related}
          />
      )
    }
}
const mapStateToProps = state => {
  return {
      news: state.news.news,
      related: state.news.related,
      loading: state.news.loading
  };
};


const mapDispatchToProps = dispatch => {
  return {
      fetchNews: news_id => {
        dispatch(fetchNews(news_id))  
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(News);