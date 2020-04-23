//Dependencies
import React from 'react';
import './global/css/App.css';
//components
import Header from './global/Header'
import Content from './global/Content'
import Footer from './global/Footer'
//Data
import items from '../data/menu'
var fecha = new Date();

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header title="Calculadora en React" items={items}/>
        <Content/>
        <Footer copyright="&copy; Andrea Liliana Ramírez Silva" year={fecha.getFullYear()} />
      </div>
    );
  }
}
