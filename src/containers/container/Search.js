import React, { Component } from 'react';
import { connect } from "react-redux";
import { SearchView } from '../../views/SearchView';
import { fetchSearchResult } from '../../actions/Search/actions';
import { onPaginate, onChange } from '../../actions/Search/actionCreators';
import loading from '../../assets/loading/Spin-1.3s-200px.svg'

class Search extends Component {
  constructor(props) {
    super(props)
    this.onPaginate = this.onPaginate.bind(this);
    this.onChange = this.onChange.bind(this);
}

  componentDidMount() {
      console.log(this.props.match.params.search)
    this.props.fetchSearchResult(this.props.page, 10, this.props.match.params.search)
  }

  onChange(e) {
    this.props.onChange(e.target.value);
}

  onPaginate(e, id) {
      e.preventDefault()
      this.props.onPaginate(id);
      this.props.fetchSearchResult(id, 10, this.props.match.params.search)
  }

  render() {
        return this.props.loading ? 
        <div>
          <img style={{ width: '120px', height: '120px', position: 'fixed', top:'45%', left:'45%' }} src={loading}/>
        </div> :
        (
          <SearchView 
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
      news: state.search.news,
      page: state.search.page,
      pages: state.search.pages,
      loading: state.search.loading,
      search_value: state.search.search_value
  };
};


const mapDispatchToProps = dispatch => {
  return {
      onPaginate: id => {
        dispatch(onPaginate(id))
      },
      fetchSearchResult: (page, limit, phrase) => {
        dispatch(fetchSearchResult(page, limit, phrase))  
      },
      onChange: value => {
        dispatch(onChange(value))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);