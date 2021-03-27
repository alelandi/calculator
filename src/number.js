import React, { Component } from 'react';

const bStyle = "btn btn-light btn-block m-2";

export default class Number extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-3">
                <button className={bStyle} role="button" aria-pressed="true">{this.props.num}</button>
            </div>
        );
    }
}