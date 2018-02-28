import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


export default class HeroSection extends Component {
  static propTypes = {

  };

  render() {
    const style = {
      margin: 12,
    };
    return (
      <div className="home-hero-section">
        <div className="demo">
          <h3>E-COMMERCE MADE EASY</h3>
          <p>Your business deserves the best.Join the revolution.</p>
          <RaisedButton fullWidth={true} label="Secondary" secondary={true} style={style} />
        </div>
        <div className="mac">
          <img src="../../images/demo.ad7c8ef2.gif"/>
        </div>
      </div>
    );
  }
}
