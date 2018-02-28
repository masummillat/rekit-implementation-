import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './redux/actions';
import ProfileNav from "./ProfileNav.js";
import OwnStor from "./OwnStor.js";
import Profile from "./Profile.js";
import {Settings} from "./Settings.js";

export class DefaultPage extends Component {
    static propTypes = {
        profile: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div className="profile-default-page">
                <div className="profileNav">
                    <ProfileNav/>
                </div>
                <div className="profile-section">
                    <div className="profile">
                        <Profile/>
                    </div>
                    <div className="shop-settings">
                        <div>
                            <h2>Own Shop</h2>
                            <OwnStor/>
                        </div>
                        <div className="settings">
                            <h3 className="name">Settings</h3>
                            <Settings/>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

/* istanbul ignore next */
function mapStateToProps(state) {
    return {
        profile: state.profile,
    };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DefaultPage);
