import React, { Component } from 'react';
import '../../styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='home'>
          <h1>Quiénes somos</h1>
        </div>
        <div className='home1'>
          <h1>Rapidez de venta garantizada</h1>
        </div>
        <div className='home2'>
          <h1>this.props.test</h1>
        </div>
      </div>

    );
  }
}
