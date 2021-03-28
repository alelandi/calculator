import React, { Component } from 'react';

const bStyle = "btn btn-secondary btn-block m-2";

export default class Operand extends Component {
    render() {
        return (
            <div className="col-md-3">
                <button className={bStyle} aria-pressed="true" onClick={this.props.onClick}>{this.props.operand}</button>
            </div>
        );
    }
}