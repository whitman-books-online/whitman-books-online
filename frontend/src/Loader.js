import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import './Loader.css';


class Loader extends Component {
  render() {
    const { type, color, width, height } = this.props

    return (
      <div className="Loader-Container">
        <ReactLoading type={type} color={color} width={width} height={height} />
      </div>
    );
  }
}

export default Loader;