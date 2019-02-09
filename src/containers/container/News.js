import React, { Component } from 'react';
import { connect } from "react-redux";
import { NewsView } from '../../views/NewsView';

class News extends Component {
    render() {
        return (
           <NewsView />
        );
      }
}

export default News;