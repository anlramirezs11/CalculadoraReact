//Dependencies
import React from 'react';
import PropTypes from 'prop-types';
//Assets
import './css/App.css';
import logo from './images/logo.svg';

export default class Header extends React.Component {
  static propTypes= {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }
  render() {
    const {title, items}=this.props;
    /*Equals to:
    const title=this.props.title;
    const items=this.props.items;
    */
    return (
      <div className="Header">
        <div className="App-header">
          <h2>{title}</h2>
          <img src={logo} className="logo" alt="logo"/>
          <ul className="Menu">
            {items && items.map((item,key)=><li key={key}><a className="link" href={item.url} >{item.title}</a></li>)}
          </ul>
        </div>
      </div>
    );
  }
}
