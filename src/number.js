import React, { Component } from 'react';

const bStyle = "btn btn-light btn-block m-2";

export default class Number extends Component {
    render() {
        return (
            <div className="col-md-3">
                <button className={bStyle} onClick={this.props.onClick} aria-pressed="true">{this.props.num}</button>
            </div>
        );
    }
}