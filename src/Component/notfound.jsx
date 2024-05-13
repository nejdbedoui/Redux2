import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

export default class Notfound extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
}
componentDidMount()  {
    setTimeout(() => {
        this.setState({ visible: false });
        
    }, 3000);
  }

  render() {
    const {visible}=this.state
    return (
      <div>
        {visible? <h1>Redirect to Movies page </h1> :  <Navigate to="/" />}
      </div>
    );
  }
}
