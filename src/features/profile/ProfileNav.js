import React, { Component } from 'react';

export default class ProfileNav extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="profile-profile-nav">
        <div className="shophobe-home">
            <img src="../../images/logo.png"/>
            <h1>Shophobe</h1>
        </div>
        <div className="profile-setting">
            <img src="../../images/profile.JPG"/>
        </div>
      </div>
    );
  }
}
