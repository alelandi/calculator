import React, { Component } from 'react';

const bStyle = "btn btn-secondary btn-block m-2";

export default class Operand extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-3">
                <button className={bStyle} role="button" aria-pressed="true">{this.props.operand}</button>
            </div>
        );
    }
}