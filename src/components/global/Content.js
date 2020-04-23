import React from 'react';
import './css/App.css';

export default class Content extends React.Component {
  constructor() {
    super();//Para tener objeto this de esta clase
    this.state = {
      count: 0,
      number1: 0,
      number2: 0,
      result: 0,
      operacion: ''
    }//Actualizar nodo hace que se ejecute de nuevo en render
    this.handleCountClick = this.handleCountClick.bind(this); //Recomendado
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {//comprueba si el componente ya cargó, se puede sumar 1 a count osea cambiar state
    this.setState({
      count: 1
    });
  }
  handleCountClick(e) {//Siempre poner el handle____
    if (e.target.id === 'add') {
      this.setState({
        count: this.state.count + 1
      });
    }
    else if (e.target.id === 'substract' && this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
    else {
      this.setState({
        count: 0
      });
    }
  }

  handleResultClick(e) {
    if (this.state.operacion === '+') {
      this.setState({
        result: this.state.number1 + this.state.number2
      });
    }
    else if (this.state.operacion === '-') {
      this.setState({
        result: this.state.number1 - this.state.number2
      });
    }
    else if (this.state.operacion === '*') {
      this.setState({
        result: this.state.number1 * this.state.number2
      });
    }
    else if (this.state.operacion === '/') {
      if (this.state.number2 === 0) {
        alert('Error en la división no se puede dividir en 0, el número 2 es: ' + this.state.number2);
      }
      else {
        this.setState({
          result: this.state.number1 / this.state.number2
        });
      }
    }
    else {
      alert('No se ha selecionado una operación');
    }


  }
  handleChange(e) {
    this.setState({ operacion: e.target.value });
  }
  handleInputChanged(e) {
    if (e.target.id === 'number1') {
      this.setState({
        number1: Number(e.target.value)
      });
    }
    else {
      this.setState({
        number2: Number(e.target.value)
      });
    }
  }

  render() {
    console.log("render ejecutado");
    return (
      <div className="content">
        <h2>Aprendiendo React con CodeJobs </h2>

        <div className="content__container">
          <div>
            <h3>Counter</h3>
            <h3>{this.state.count}</h3>
            <div className="content__container">
              <button id="add" onClick={this.handleCountClick}>+</button>
              <button id="substract" onClick={this.handleCountClick}>-</button>
              <button id="rest" onClick={this.handleCountClick}>Reset</button>
            </div>
          </div>
          <div className="content__container--calculator">
            <h2>CALCULADORA</h2>
            <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChanged} />
            <select value={this.state.operacion} onChange={this.handleChange}>
              <option value="...">operacion</option>
              <option value="+">Sumar</option>
              <option value="-">Restar</option>
              <option value="*">Multiplicar</option>
              <option value="/">Dividir</option>
            </select>
            <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChanged} />
            <button id="Resultado" onClick={this.handleResultClick}>=</button>
            {this.state.result}
          </div>
        </div>
      </div>
    );
  }
}
