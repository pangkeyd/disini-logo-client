import React from 'react'
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'

class ProfileUserModalEditProfile extends React.Component {

  constructor(props) {
    super(props)

    this.file = null
    this.state = {
      files: []
    }

    this._onChangeHandler = this._onChangeHandler.bind(this)
    this._onDeleteFile = this._onDeleteFile.bind(this)
  }

  _onChangeHandler(e) {
    for(let i = 0; i < e.target.files.length; i ++) {
      let file = e.target.files[i]

      let reader = new FileReader()
      reader.onloadend = e => {
        this.setState({
          files: [...this.state.files, {
            file,
            url: e.currentTarget.result
          }]
        })
      }

      reader.readAsDataURL(file)
    }
  }

  _onDeleteFile(file) {
    let files = this.state.files
    files.splice(file, 1)
    this.setState({
      files
    })
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.showModal}
          onHide={this.props.hideModal}
          className="modal-edit-profile"
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl type="text" />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl type="email" />
              </FormGroup>

              <p className="change-pass-modal-label">Change Password</p>
              <FormGroup>
                <ControlLabel>Old Password</ControlLabel>
                <FormControl type="password" />
              </FormGroup>

              <FormGroup>
                <ControlLabel>New Password</ControlLabel>
                <FormControl type="password" />
              </FormGroup>

              <p>Image</p>
              { this.state.files.length === 0 
                ? <FormGroup>
                    <FormControl type="file" onChange={ this._onChangeHandler } />
                  </FormGroup> 
                : <span className="edit-image">
                    <Button
                      className="close-img"
                      bsSize="small"
                      onClick={() => this._onDeleteFile(this.state.files) }
                    >X</Button>
                    <img src={ this.state.files[0].url } width="80" alt="" />
                  </span>
              }
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hideModal}>Close</Button>
            <Button bsStyle="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}

export default ProfileUserModalEditProfile