import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import {
  Grid,
  Col
} from 'react-bootstrap'

import JumboFormLogin from './JumboFormLogin'

class JumboCarousel extends React.Component {

  render() {
    return (
      <Grid>
        <div className="jumbo-carousel">
          <Col md={ 8 }>
            <OwlCarousel 
              className="owl-theme"
              loop
              margin={10}
              nav
              autoplay={ true }
              dots={ false }

            >
              <div className="item">
                <h4>
                  <img src="https://filene.org/assets/images-general/MemberJourney_blog_graphic_panicmode_02.png" alt="" />
                </h4>
              </div>
              <div className="item">
                <h4>
                  <img src="https://3.bp.blogspot.com/-Kocy8Bd1-To/WcQBu0WTRGI/AAAAAAAAEOE/Nx4dFT_F2V4vwFBzlEPWDOV6AipW2EABACLcBGAs/s1600/breaking-news-ticker-for-blog-website.jpg" alt="" />
                </h4>
              </div>
              <div className="item">
                <h4>
                  <img src="https://2.bp.blogspot.com/-qVOzTa9s4ao/WmDah-3lBpI/AAAAAAAAAIo/Tyqq9LJHPyUN3zrt8fNiGNmDAe0EZU0WgCLcBGAs/s1600/Pengertian%2Bblogger.jpg" alt="" />
                </h4>
              </div>
              <div className="item">
                <h4>
                  <img src="http://mas-syahid.faceblog.id/files/widget-popular-posts.png" alt="" />
                </h4>
              </div>
              <div className="item">
                <h4>
                  <img src="http://mas-syahid.faceblog.id/files/widget-related-posts-with-thumbnail.png" alt="" />
                </h4>
              </div>
            </OwlCarousel>
          </Col>
          <Col md={ 4 }>
            <JumboFormLogin />
          </Col>
        </div>
      </Grid>
    )
  }

}

export default JumboCarousel