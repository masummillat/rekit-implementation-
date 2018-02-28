import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import PasswordField from 'material-ui-password-field'

export class Settings extends Component {
  // static propTypes = {
  //   profile: PropTypes.object.isRequired,
  //   actions: PropTypes.object.isRequired,
  // };

  constructor(){
    super();

  }

  render() {
    const style = {
      margin: 12,
    };
    return (
      <div className="profile-settings">
        <div className="section1">
              <div className="basic-info">
                <h1>Basic info</h1>
                <TextField
                    hintText="Name"
                    floatingLabelText="Name"
                />
                <TextField
                    hintText="masummillat@shophobe.com"
                    floatingLabelText="Email"

                />
                <TextField
                    hintText="+8801521492879"
                    floatingLabelText="Phone Number"
                    type="password"
                />
                <DatePicker hintText="Landscape Dialog" mode="landscape" />

                <RaisedButton label="Primary" primary={true} style={style} />
              </div>
          <div className="edit-password">
            <h1>Edit Password</h1>
            <PasswordField
                hintText="At least 8 characters"
                floatingLabelText="Enter your password"
                errorText="Your password is too short"
            />
            <PasswordField
                hintText="At least 8 characters"
                floatingLabelText="Enter your password"
                errorText="Your password is too short"
            />
          </div>
          <div className="legal-document">
            <h1>Legal Document</h1>
            <TextField
                hintText="**************"
                floatingLabelText="Enter Your National Id Number"
                type="password"
            />
            <TextField
                hintText="**************"
                floatingLabelText="Enter Your TIN/E-TIN Number"
                type="password"
            />
            <p>UPLOAD LEGAL DOCUMENT (VERIFICATION)</p>
            <div className="uploads">
              <input type="file" name="nid-front"/>
              <input type="file" name="nid-back"/>

            </div>
          </div>
        </div>
        <div className="section2">
            <div>

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
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);


