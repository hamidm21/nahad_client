import React, { Component } from 'react';
import { connect } from "react-redux";
import { NewsListView } from '../../views/NewsListView';

class NewsList extends Component {
    render() {
        return (
           <NewsListView />
        );
      }
}

export default NewsList;