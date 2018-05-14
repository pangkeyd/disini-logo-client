import React, { Component } from 'react'

import Header from './Header'
import JumboBanner from './JumboBanner'
import JumboCarousel from './JumboCarousel'
import Article from './Article'
import ContentFooter from './ContentFooter'
import Footer from './Footer'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <JumboBanner />
        <JumboCarousel />
        <Article />
        <ContentFooter />
        <Footer />
      </div>
    )
  }
}
