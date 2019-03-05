import React, { Component } from 'react';
import { connect } from "react-redux";
import { HomeView } from '../../views/HomeView';
// import { fetchNews } from '../../actions/Home/actions';
import { toggleCollapse } from '../../actions/Home/actionCreators';


class Home extends Component {
    constructor(props) {
        super(props)
        this.onToggle = this.onToggle.bind(this);
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
           />
        );
      }
}


const mapStateToProps = state => {
    return {
        toggle_id: state.home.toggle_id,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onToggle: id => {
            dispatch(toggleCollapse(id))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);