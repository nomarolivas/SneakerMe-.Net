import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (


      <Navbar className="navbar">
        <h1 className='websiteTitle'>SneakerMe</h1>
        <div className='tabLinks'>

          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/Sneakers">Sneakers</Link>
          <Link className="link" to="/Sale">Sale</Link>
          <Link className="link" to="/About">About Us</Link>
          <Link className="link" to="/Login">Login</Link>
       
        </div>

      </Navbar>
    );
  }
}

