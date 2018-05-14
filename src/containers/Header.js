import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'

export default class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      qwerty: localStorage.qwerty
    }
  }

  componentDidMount() {
    console.log(localStorage.qwerty, '--------------')
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">DISINI LOGO</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              { this.state.qwerty && <NavItem eventKey={2} href="#">
                Profile
              </NavItem> }
              <NavDropdown eventKey={3} title="Kategori" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
