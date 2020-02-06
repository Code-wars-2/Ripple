import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="header-link">Learner</Link>
        <Link to="/ripple" className="header-link">Ripple</Link>
        <Link to="/ripple-mod" className="header-link">Ripple-Mod</Link>
        <Link to="/spiral" className="header-link">Spiral</Link>
        <Link to="/maze" className="header-link">Maze</Link>
      </div>
    );
  }
}

export default Header;