import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="text-center">
                    <br />
                    <h3>404 error </h3>
                    <h4>page not found</h4>
                    <br/>
                    <p>
                        The requested URL {" "}
                        <span className="text-danger">
                            {this.props.location.pathname}
                        </span>{" "}
                        was not found
                    </p>
                </div>
            </div>
        )
    }
}
