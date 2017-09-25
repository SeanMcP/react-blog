import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header'

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='p-4'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
