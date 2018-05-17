import React from 'react'

import Header from './Header'
import Content from '../components/profile-content'

class Profile extends React.Component {

  render() {
    return (
      <div className="profile-page">
        <Header />
        <Content />
      </div>
    )
  }

}

export default Profile