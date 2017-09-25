import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav id='mainNav' className='navbar navbar-expand-lg'>
        <span id='branding' className='navbar-brand center-items'><i className="material-icons md-light mr-2">pages</i> Blog Together</span>
        <NavLink className='nav-link active' to='/'>Feed</NavLink>
        <NavLink className='nav-link active' to='/compose'>Compose</NavLink>
        <NavLink id='composeButton' to='/compose'><i className="material-icons md-48">mode_edit</i></NavLink>
      </nav>
    );
  }
}
