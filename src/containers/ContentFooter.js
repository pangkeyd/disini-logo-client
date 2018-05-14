import React from 'react'
import {
  Grid,
  Col,
  FormGroup,
  FormControl,
  Button,
  Form
} from 'react-bootstrap'

class ContentFooter extends React.Component {

  render() {
    return (
      <div className="content-footer">
        <Grid>
          <Col md={ 8 }>
            <Form inline>
              <FormGroup>
                <FormControl type="text" />
              </FormGroup>
              <Button>Subscribe</Button>
            </Form>
          </Col>
          <Col md={ 4 }>
            <span className="facebook-icon">
              <i className="fab fa-facebook-f"></i>
            </span>
            <span className="twitter-icon">
              <i className="fab fa-twitter"></i>
            </span>
            <span className="gplus-icon">
              <i className="fab fa-google-plus-g"></i>
            </span>
          </Col>
        </Grid>
      </div>
    )
  }

}

export default ContentFooter