import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      onChange: localStorage.getItem('qwe123'),
      toProfile: false
    }

    this.goToProfile = this.goToProfile.bind(this)

  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.data_LS.length > 0) {
      localStorage.setItem('qwe123', nextProps.data_LS[0].qwerty)
      this.setState({
        onChange: localStorage.getItem('qwe123')
      })
    } else {
      this.setState({
        onChange: null
      })
    }
  }

  goToProfile() {
    this.setState({
      toProfile: true
    })
  }

  render() {
    const { toProfile } = this.state

    if (toProfile) {
      return <Redirect to="/profile" />
    }

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">DISINI LOGO</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              { this.state.onChange ? <NavItem to="/profile" eventKey={2} onClick={ this.goToProfile }>Profile</NavItem> : '' }
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

const mapStateToProps = (state) => {
  return {
    data_LS: state.data
  }
}

export default connect(mapStateToProps)(Header)