import React from 'react';
import PropTypes from 'prop-types';
//Assets
import './css/App.css';

export default class Footer extends React.Component {
  static propTypes = {
    copyright: PropTypes.string,
    year: PropTypes.string
  }
  render() {
    const {copyright, year}=this.props;
    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{ __html: copyright +' ' + year }}/>
      </div>
    );
  }
}
