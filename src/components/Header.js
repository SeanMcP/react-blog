import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <NavLink to='/'>Feed</NavLink>
        <NavLink to='/compose'>Compose</NavLink>
      </nav>
    );
  }
}
