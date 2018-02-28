import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RedditList } from './';
import { counterPlusOne, counterMinusOne, resetCounter, fetchRedditReactjsList } from './redux/actions';
import HeroSection from "./HeroSection.js";
import LoginSignup from "./LoginSignup.js";
import SimpleNav from "../common/SimpleNav.js";
import routeConfig from '../../common/routeConfig';
export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { count, fetchRedditReactjsListPending, redditReactjsList, fetchRedditReactjsListError } = this.props.home;
    const { counterPlusOne, counterMinusOne, resetCounter, fetchRedditReactjsList } = this.props.actions;
    return (
      <div className="home-default-page">
        <div className="sidebar">
          <SimpleNav routes={routeConfig}/>
        </div>
        <div>
          <HeroSection/>
        </div>

      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ counterPlusOne, counterMinusOne, resetCounter, fetchRedditReactjsList }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
