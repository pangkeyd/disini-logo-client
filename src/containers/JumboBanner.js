import React from 'react'
import {
  Grid,
  Col
} from 'react-bootstrap'

class JumboBanner extends React.Component {

  render() {
    return (
      <Grid>
        <div className="jumbo-banner-wrap">
          <div>
            <Col md={ 6 } className="text-center">
              Ads 700 x 125 <br />
              081999999999
            </Col>
            <Col md={ 6 } className="text-center">
              Ads 700 x 125 <br />
              081999999999
            </Col>
          </div>
        </div>
      </Grid>
    )
  }

}

export default JumboBanner