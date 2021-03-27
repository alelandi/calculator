import React, { Component } from 'react';
import Result from './result'
import Operand from './operand'
import Number from './number'
import 'bootstrap/dist/css/bootstrap.css'
//import logo from './logo.svg';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
      firstOperand: null,
      operator: null,
      waitOperand: false
    }
    this.inputOperator = this.inputOperator.bind(this);
    this.execOperation = this.execOperation.bind(this);
    this.inputNum = this.inputNum.bind(this);
    this.inputDot = this.inputDot.bind(this);
  }

  execOperation(firstOp, secondOp, operand) {
    let result = 0;
    switch(operand) {
      case '+':
        result = firstOp + secondOp;
        break;
      case '-':
        result = firstOp - secondOp;
        break;
      case 'x':
        result = firstOp * secondOp;
        break;
      case '/':
        result = firstOp / secondOp;
        break;
      case '=':
        result = secondOp;
        break;
    }

    return result;
  }

  inputNum(num) {
    let nextDisplayValue = (this.state.waitOperand || this.state.displayValue === "0") ? num : (this.state.displayValue + num);
    this.setState(  { 
      displayValue: nextDisplayValue,
      waitOperand: false
    });
  }

  inputDot() {
    let nextDisplayValue = this.state.waitOperand ? "0" + "." : (this.state.displayValue + ".");
    this.setState({
      displayValue: nextDisplayValue,
      waitOperand: false
    });
  }

  inputOperator(nextOperator) {
    let nextDisplayValue = this.state.displayValue;
    let currentOperand = parseFloat(this.state.displayValue);
    if(this.state.operator) {
      currentOperand = this.execOperation(this.state.firstOperand, currentOperand, this.state.operator);
      nextDisplayValue = String(currentOperand);
    } 

    this.setState((prevState) => ({
      displayValue: nextDisplayValue,
      firstOperand: currentOperand,
      operator: nextOperator,
      waitOperand: true
    }));
  }

  render() {
    return (
      <div className="container w-50">
        {/* Div area for the result. */}
        <div className="row">
          <Result res={this.state.displayValue} />
        </div>

        {/* Buttons area. */}
        <div className="row">
          {/* First row. */}
          <Number num="7" onClick={() => this.inputNum("7")} />
          <Number num="8" onClick={() => this.inputNum("8")} />
          <Number num="9" onClick={() => this.inputNum("9")} />
          <Operand operand="/" onClick={() => this.inputOperator("/")} />

          {/* Second row. */}
          <Number num="4" onClick={() => this.inputNum("4")} />
          <Number num="5" onClick={() => this.inputNum("5")} />
          <Number num="6" onClick={() => this.inputNum("6")} />
          <Operand operand="x" onClick={() => this.inputOperator("x")} />

          {/* Third row. */}
          <Number num="1" onClick={() => this.inputNum("1")} />
          <Number num="2" onClick={() => this.inputNum("2")} />
          <Number num="3" onClick={() => this.inputNum("3")} />
          <Operand operand="-" onClick={() => this.inputOperator("-")} />

          {/* Last row. */}
          <Number num="0" onClick={() => this.inputNum("0")} />
          <div className="col-md-3">
            <button onClick={() => this.inputDot()} className="btn btn-light btn-block m-2" aria-pressed="true"> . </button>
          </div>
          <div className="col-md-3">
            <button onClick={() => this.inputOperator("=")} className="btn btn-success btn-block m-2" aria-pressed="true"> = </button>
          </div>
          <Operand operand="+" onClick={() => this.inputOperator("+")} />
        </div>
      </div>
    );
  }
}
