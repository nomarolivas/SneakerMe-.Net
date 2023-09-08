import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  // constructor (props) {
  //   super(props);

  //   this.toggleNavbar = this.toggleNavbar.bind(this);
  //   this.state = {
  //     collapsed: true
  //   };
  // }

  // toggleNavbar () {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // }

  render() {
    return (
      // <header>
      //   <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
      //     <NavbarBrand tag={Link} to="/">sneakerMe</NavbarBrand>
      //     <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
      //     <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
      //       <ul className="navbar-nav flex-grow">
              // <NavItem>
              //   <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              // </NavItem>

              // <NavItem>
              //   <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
              // </NavItem>

              // <NavItem>
              //   <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
              // </NavItem>

      //         <LoginMenu>
      //         </LoginMenu>
      //       </ul>
      //     </Collapse>
      //   </Navbar>
      // </header>

      <Navbar className="navbar">
        <h1 className='websiteTitle'>SneakerMe</h1>
        <div className='tabLinks'>
        {/* <NavItem>
          <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
        </NavItem> */}

        

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


// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
        
//         <nav className="navbar">
//             <h1 className='websiteTitle'>SneakerMe</h1>
//             <div className="tabLinks">
//                 <Link  className= "link" to="/">Home</Link>
//                 <Link  className= "link" to="/Sneakers">Sneakers</Link>
//                 <Link className= "link" to="/Sale">Sale</Link>
//                 <Link className= "link" to="/About">About Us</Link>
//                 <Link className= "link" to="/Login">Login</Link>

//             </div>

//         </nav>
//     );
// }

// export default Navbar;