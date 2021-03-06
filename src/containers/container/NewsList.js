import React, { Component } from 'react';
import { connect } from "react-redux";
import { NewsListView } from '../../views/NewsListView';
import { fetchNews } from '../../actions/NewsList/actions';
import { onPaginate, onChange } from '../../actions/Home/actionCreators';
import loading from '../../assets/loading/Spin-1.3s-200px.svg'
class NewsList extends Component {
  constructor(props) {
    super(props)
    this.onPaginate = this.onPaginate.bind(this);
    this.onChange = this.onChange.bind(this);
}

  componentDidMount() {
    this.props.fetchNews(this.props.page, 10, this.props.match.params.category)
  }

  onChange(e) {
    this.props.onChange(e.target.value);
}

  onPaginate(e, id) {
      e.preventDefault()
      this.props.onPaginate(id);
      this.props.fetchNews(id, 10, this.props.match.params.category)
  }

  render() {
        return this.props.loading || !this.props.news ? 
        <div>
          <img style={{ width: '120px', height: '120px', position: 'fixed', top:'45%', left:'45%' }} src={loading}/>
        </div> :
        (
          <NewsListView 
          onPaginate={this.onPaginate}
          news={this.props.news}
          pages={this.props.pages}
          loading={this.props.loading}
          onChangeHandler={this.onChange}
          search_value={this.props.search_value}
          />
    );
    }
}

const mapStateToProps = state => {
  return {
      news: state.newsList.news,
      page: state.home.page,
      pages: state.newsList.pages,
      loading: state.newsList.loading,
      search_value: state.newsList.search_value
  };
};


const mapDispatchToProps = dispatch => {
  return {
      onPaginate: id => {
        dispatch(onPaginate(id))
      },
      fetchNews: (page, limit, category_name) => {
        dispatch(fetchNews(page, limit, category_name))  
      },
      onChange: value => {
        dispatch(onChange(value))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);