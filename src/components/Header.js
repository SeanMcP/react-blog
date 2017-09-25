import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav id='mainNav' className='navbar'>
        <NavLink className='nav-item nav-link active' to='/'>Feed</NavLink>
        <NavLink id='composeButton' to='/compose'><i className="material-icons md-48">mode_edit</i></NavLink>
      </nav>
    );
  }
}
