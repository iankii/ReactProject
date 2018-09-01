import React from 'react';
import { IndexLink, Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        <IndexLink to="blogs" activeClassName="active"><span className="book" >Blog</span></IndexLink>
        <IndexLink to="aboutus" activeClassName="active"><span >About Me</span></IndexLink>
      </div>
    )
  }
}

export default Header;