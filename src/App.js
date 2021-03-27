import React, { Component } from 'react';
import Operand from './operand'
import Number from './number'
import 'bootstrap/dist/css/bootstrap.css'
//import logo from './logo.svg';

function App() {
  return (
    <div className="container w-50">
        {/* textbox area for the result. */}
        <div className="row">
          <div className="col-md-12">
            <div className="w-100 border rounded p-3 m-2 text-right">
              
            </div>
          </div>
        </div>

        {/* buttons area. */}
        <div className="row">
          {/* First row. */}
          <Number num="7" />
          <Number num="8" />
          <Number num="9" />
          <Operand operand="÷" />

          {/* Second row. */}
          <Number num="4" />
          <Number num="5" />
          <Number num="6" />
          <Operand operand="x" />

          {/* Third row. */}
          <Number num="1" />
          <Number num="2" />
          <Number num="3" />
          <Operand operand="-" />

          {/* Last row. */}
          <Number num="0" />
          <div className="col-md-3">
            <button name="dot" className="btn btn-light btn-block m-2" role="button" aria-pressed="true"> . </button>
          </div>
          <div className="col-md-3">
            <button name="sum" className="btn btn-success btn-block m-2" role="button" aria-pressed="true"> = </button>
          </div>
          <Operand operand="+" />
        </div>
      </div>
  );
}

export default App;
