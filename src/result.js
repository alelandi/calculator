import React, { Component } from 'react';

const bStyle = "w-100 border rounded p-3 m-2 text-right";

export default class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="col-md-12">
            <div className={bStyle}>
              {this.props.res}
            </div>
          </div>
        );
    }
}
