import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'

import take from '../lib/take'

// munculin profile di header saat sudah login
export default class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      token: localStorage.getItem('qwerty')
    }

    // this.getLocalStorage

    // this.getLocalStorage = this.getLocalStorage.bind(this)
  }

  componentDidMount() {
    // this.getLocalStorage
    if (localStorage.getItem('qwerty') !== null) {
      this.setState({
        token: localStorage.getItem('qwerty')
      })
    }
  }

  // getLocalStorage() {
  //   if (localStorage.getItem('qwerty') !== null) {
  //     this.setState({
  //       token: localStorage.getItem('qwerty')
  //     })
  //   }
  // }

  render() {
    // console.log(this.props.qwerty)
    // console.log(localStorage.getItem('qwerty'), 'ini di header')
    // console.log(this.state.token, 'ini di token')
    // if (localStorage.getItem('qwerty') !== null) {
    //   console.log('kiwssss')
    // } else {
    //   console.log('token null')
    // }
    console.log(this.state.token, 'ini di header')

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
              { localStorage.getItem('qwerty') && <NavItem eventKey={2} href="#">
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
