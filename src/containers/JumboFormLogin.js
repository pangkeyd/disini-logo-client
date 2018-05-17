import React from 'react'
import {
  FormGroup,
  FormControl,
  InputGroup,
  Button
} from 'react-bootstrap'
import jwt from 'jsonwebtoken'
import { connect } from 'react-redux'

import {
  get_localStorage,
  clear_localStorage
} from '../actions'

import ModalRegister from '../components/jumboformlogin-modal-register'

import request from '../lib/request'

class JumboFormLogin extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      emailOrUsername: '',
      password: '',
      loginValidation: '',
      showModalRegister: false,
      dataUser: [{
        qwerty: localStorage.getItem('qwerty'),
        email: localStorage.getItem('asdfgh'),
        username: localStorage.getItem('zxcvbn'),
        id: localStorage.getItem('tyuiop')
      }]
    }

    this.handleInputText = this.handleInputText.bind(this)
    this.handleInputPassword = this.handleInputPassword.bind(this)
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleShowModal = this.handleShowModal.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleInputText(e) {
    this.setState({
      emailOrUsername: e.target.value
    })
  }

  handleInputPassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleCloseModal() {
    this.setState({
      showModalRegister: false
    })
  }

  handleShowModal() {
    this.setState({
      showModalRegister: true
    })
  }

  handleSubmitLogin(e) {
    e.preventDefault()
    let objData = {
      input: this.state.emailOrUsername,
      password: this.state.password
    }
    request.signIn('/user/signin', objData, (res) => {
      switch (res.status) {
        case 0:
          console.log(res)
          break
        case 1:
          let decoded = jwt.decode(res.data.token)
          localStorage.setItem('qwerty', res.data.token)
          localStorage.setItem('asdfgh', decoded.email)
          localStorage.setItem('zxcvbn', decoded.username)
          localStorage.setItem('tyuiop', decoded.id)
          let objLS = {
            qwerty: res.data.token,
            email: decoded.email,
            username: decoded.username,
            id: decoded.id
          }
          this.props.save_LS(objLS)
          this.setState({
            dataUser: [{
              qwerty: res.data.token,
              email: decoded.email,
              username: decoded.username,
              id: decoded.id
            }]
          })
          break
        case 2:
          this.setState({
            loginValidation: res.data.error
          })
          break
        default:
          break
      }
    })
  }

  logout() {
    this.props.clear_LS(localStorage.getItem('tyuiop'))
    localStorage.clear()
    this.setState({
      dataUser: [{
        qwerty: null,
        email: null,
        username: null,
        id: null
      }]
    })
  }

  render() {
    return (
      <div className="jumbo-form-wrap">
        { this.state.dataUser[0].qwerty === null && <div className="jumbo-form-login">
          <p>Masuk</p>
          <form onSubmit={ this.handleSubmitLogin }>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <i className="fas fa-user"></i>
                </InputGroup.Addon>
                <FormControl type="text" placeholder="Email atau Username" onChange={ this.handleInputText } />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <i className="fas fa-unlock"></i>
                </InputGroup.Addon>
                <FormControl type="password" placeholder="Password" onChange={ this.handleInputPassword } />
              </InputGroup>
            </FormGroup>
            <p className="login-validation">{ this.state.loginValidation }</p>
            <Button type="submit" bsStyle="primary">Masuk</Button>
          </form>
          <p>Tidak Terdaftar? <a href="#register" onClick={ this.handleShowModal }>Daftar</a></p>
          <ModalRegister showModal={ this.state.showModalRegister } hideModal={ this.handleCloseModal } /> 
        </div> }
        { this.state.dataUser[0].qwerty !== null && <div className="jumbo-form-after-login">
          <p>
            Selamat datang, <span className="span-after-login-name">{ localStorage.zxcvbn }!</span>
          </p>
          <p>
            Apa cerita mu?
          </p>
          <p>
            <a href="#logout" onClick={ this.logout }>Keluar</a>
          </p>
        </div> }
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    save_LS: (data) => dispatch(get_localStorage(data)),
    clear_LS: (id) => dispatch(clear_localStorage(id))
  }
}

export default connect(null, mapDispatchToProps)(JumboFormLogin)