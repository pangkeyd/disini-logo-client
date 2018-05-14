import React from 'react'
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  InputGroup
} from 'react-bootstrap'
import $ from 'jquery'

import request from '../lib/request'

class ModalRegister extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      emailValidation: '',
      username: '',
      usernameValidation: '',
      password: '',
      passwordValidation: '',
      confirmPassword: '',
      confirmPasswordValidation: ''
    }

    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handleUsernameInput = this.handleUsernameInput.bind(this)
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
    this.handleConfPasswordInput = this.handleConfPasswordInput.bind(this)
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this)
  }

  handleEmailInput(e) {
    let emailVal = e.target.value
    let validateEmail = (email) => {
      var re = /^(([^<>()\\\\.,;:\s@"]+(\.[^<>()\\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    this.setState({
      email: e.target.value
    })

    if (!validateEmail(emailVal)) {
      this.setState({
        emailValidation: 'Ini bukan email!'
      })
    } else {
      this.setState({
        emailValidation: ''
      })
    }

    if (emailVal.length === 0) {
      this.setState({
        emailValidation: 'Harap di isi ya!'
      })
    }
  }

  handleUsernameInput(e) {
    let usernameVal = e.target.value
    this.setState({
      username: usernameVal
    })

    if (usernameVal.length < 8) {
      this.setState({
        usernameValidation: 'Minimal 8 karakter ya!'
      })
    } else {
      this.setState({
        usernameValidation: ''
      })
    }

    if (usernameVal.length === 0) {
      this.setState({
        usernameValidation: 'Harap di isi ya!'
      })
    }
  }

  handlePasswordInput(e) {
    let passwordVal = e.target.value
    this.setState({
      password: passwordVal
    })

    if (passwordVal.length < 8) {
      this.setState({
        passwordValidation: 'Minimal 8 karakter ya!'
      })
    } else {
      this.setState({
        passwordValidation: ''
      })
    }

    if (passwordVal.length === 0) {
      this.setState({
        passwordValidation: 'Harap di isi ya!'
      })
    }
  }

  handleConfPasswordInput(e) {
    let confPass = e.target.value
    this.setState({
      confirmPassword: confPass
    })

    if (confPass !== this.state.password) {
      this.setState({
        confirmPasswordValidation: 'Password tidak sama, harus disamakan!'
      })
    } else {
      this.setState({
        confirmPasswordValidation: ''
      })
    }
  }

  handleSubmitRegister(e) {
    e.preventDefault()
    let objData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }
    request('/user/signup', objData, function(res) {
      if (res.status === 1) {
        alert('Sukses Daftar!')
        $('.modal').hide()
        $('.modal-backdrop.in').hide()
      }
    })
  }

  render() {
    return (
      <div>
        <Modal
          bsSize="small"
          aria-labelledby="contained-modal-title-sm"
          show={ this.props.showModal }
          onHide={ this.props.hideModal }
          className="modal-register"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={ this.handleSubmitRegister }>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <i className="fas fa-envelope"></i>
                  </InputGroup.Addon>
                  <FormControl type="email" placeholder="Email" onChange={ this.handleEmailInput } />
                </InputGroup>
              </FormGroup>
              <p className="form-validation-register">{ this.state.emailValidation }</p>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <i className="fas fa-user"></i>
                  </InputGroup.Addon>
                  <FormControl type="text" placeholder="Username" onChange={ this.handleUsernameInput } />
                </InputGroup>
              </FormGroup>
              <p className="form-validation-register">{ this.state.usernameValidation }</p>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <i className="fas fa-unlock"></i>
                  </InputGroup.Addon>
                  <FormControl type="password" placeholder="Password" onChange={ this.handlePasswordInput } />
                </InputGroup>
              </FormGroup>
              <p className="form-validation-register">{ this.state.passwordValidation }</p>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <i className="fas fa-unlock"></i>
                  </InputGroup.Addon>
                  <FormControl type="password" placeholder="Confirm Password" onChange={ this.handleConfPasswordInput } />
                </InputGroup>
              </FormGroup>
              <p className="form-validation-register">{ this.state.confirmPasswordValidation }</p>
              
              <div className="btn-footer">
                <Button onClick={this.props.hideModal}>Close</Button>
                <Button type="submit" bsStyle="primary">Register</Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }

}

export default ModalRegister