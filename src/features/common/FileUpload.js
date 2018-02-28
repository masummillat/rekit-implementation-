import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Upload from 'material-ui-upload/Upload';

export class FileUpload extends Component {
  // static propTypes = {
  //   common: PropTypes.object.isRequired,
  //   actions: PropTypes.object.isRequired,
  // };

  onFileLoad = (e, file) => console.log(e.target.result, file.name);

  render() {
    return (
        <Upload label="Add" onFileLoad={this.onFileLoad}/>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    common: state.common,
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
)(FileUpload);
