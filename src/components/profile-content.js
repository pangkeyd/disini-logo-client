import React from 'react'
import {
  Grid,
  Col
} from 'react-bootstrap'

import User from './profile-user'

class ProfileContent extends React.Component {

  render() {
    return (
      <Grid>
        <Col md={ 3 }>
          <User />
        </Col>
        <Col md={ 9 }>ini profile content</Col>
      </Grid>
    )
  }

}

export default ProfileContent