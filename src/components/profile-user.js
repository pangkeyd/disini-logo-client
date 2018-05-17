import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import ModalEditProfile from './profile-user-modal-edit-profile'

import { get_user_by_id } from '../actions'

import no_image from '../assets/image/profile/no-image.png'

class ProfileUser extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      logout: false,
      modalEditProfile: false
    }

    this.getUserProfile()

    this.closeModalEditProfile = this.closeModalEditProfile.bind(this)
    this.showModalEditProfile = this.showModalEditProfile.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    this.getUserProfile()
  }

  closeModalEditProfile() {
    this.setState({
      modalEditProfile: false
    })
  }

  showModalEditProfile() {
    this.setState({
      modalEditProfile: true
    })
  }

  getUserProfile() {
    this.props.get_user(localStorage.getItem('tyuiop'))
  }

  logout() {
    localStorage.clear()
    this.setState({
      logout: true
    })
  }

  render() {
    const { logout } = this.state
    let proUserWrap

    if (logout) {
      return <Redirect to="/" />
    }

    if (this.props.data_user.length > 0) {
      if (this.props.data_user[0].image !== null) {
        proUserWrap = <div className="profile-user">
          <div className="img-wrap">
            <img src={ this.props.data_user[0].image } alt="" />
          </div>
          <div className="info-wrap">
            <p className="text-center username">{ localStorage.getItem('zxcvbn') }</p>
            <p className="text-center">
              <a href="#edit-profile" onClick={ this.showModalEditProfile }>Edit Profile</a>
            </p>
            <p className="text-center">
              <a href="#logout" onClick={ this.logout }>Logout</a>
            </p>
          </div>
        </div>
      } else {
        proUserWrap = <div className="profile-user">
          <div className="img-wrap">
            <img src={ no_image } alt="" />
          </div>
          <div className="info-wrap">
            <p className="text-center username">{ localStorage.getItem('zxcvbn') }</p>
            <p className="text-center">
              <a href="#edit-profile" onClick={ this.showModalEditProfile }>Edit Profile</a>
            </p>
            <p className="text-center">
              <a href="#logout" onClick={ this.logout }>Logout</a>
            </p>
          </div>
        </div>
      }
    }

    return (
      <div className="profile-user">
        { proUserWrap }
        <ModalEditProfile
          showModal={ this.state.modalEditProfile } hideModal={ this.closeModalEditProfile } 
        />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    data_user: state.dataUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_user: (id) => dispatch(get_user_by_id(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUser)