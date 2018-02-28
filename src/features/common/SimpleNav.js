/*
 * This is a very simple navigation tree for testing purpose.
 * It groups URLs by features.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import LoginSignup from "../home/LoginSignup.js";
export default class SimpleNav extends PureComponent {
  static propTypes = {
    routes: PropTypes.array.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  renderLinks(items, basePath) {
    return (
      <ul>
        {items.reduce((prev, item) => {
          if (item.autoIndexRoute) return prev;
          let path;
          if (/^\//.test(item.path)) {
            path = item.path;
          } else if (basePath === '/') {
            path = `/${item.path}`;
          } else {
            path = `${basePath}/${item.path}`;
          }
          prev.push(<li className="link" key={path}><Link to={path}>{item.name || item.path}</Link></li>);

          if (item.childRoutes && item.childRoutes.length) {
            prev.push(<li className="link" key={`${path}_wrapper`}>{this.renderLinks(item.childRoutes, path)}</li>);
          }
          return prev;
        }, [])}
      </ul>
    );
  }

  render() {
    const style = {
      margin: 12,
      title: {
        cursor: 'pointer',
      },
    };
    return (
      <div className="common-simple-nav">
        <div className="logo">SHOPHOBE</div>

        <div className="nav">
            {this.renderLinks(this.props.routes[0].childRoutes, '')}
        </div>
        <div className="start-selling">
          <RaisedButton
              label="START SEELING"
              onClick={this.handleToggle}
          />
          <Drawer
              style={{alingItem:"center",justifyContent:"center"}}
              docked={false}
              width={400}
              openSecondary={true}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}>
            <AppBar
                title="Login / Signup"
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonClick={this.handleClose}
                onTitleClick={this.handleClose}
            />

              <LoginSignup/>


          </Drawer>
        </div>
      </div>
    );
  }
}
