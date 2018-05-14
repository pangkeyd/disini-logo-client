import React from 'react'
import {
  FormGroup,
  FormControl,
  InputGroup
} from 'react-bootstrap'

import ModalRegister from '../components/jumboformlogin-modal-register'

class JumboFormLogin extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showModalRegister: false
    }

    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleShowModal = this.handleShowModal.bind(this)
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

  render() {
    return (
      <div className="jumbo-form-login">
        <p>Masuk</p>
        <form>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <i className="fas fa-user"></i>
              </InputGroup.Addon>
              <FormControl type="text" placeholder="Email or Username" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <i className="fas fa-unlock"></i>
              </InputGroup.Addon>
              <FormControl type="password" placeholder="Password" />
            </InputGroup>
          </FormGroup>
        </form>
        <p>Tidak Terdaftar? <a href="#register" onClick={ this.handleShowModal }>Daftar</a></p>
        <ModalRegister showModal={ this.state.showModalRegister } hideModal={ this.handleCloseModal } />
      </div>
    )
  }

}

export default JumboFormLogin