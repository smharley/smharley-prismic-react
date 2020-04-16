import React from 'react'
import { Helmet } from 'react-helmet'

const DefaultLayout = ({ layoutClass, seoTitle, children }) => (
  <div className={layoutClass}>
    <Helmet>
      <title>{seoTitle}</title>
    </Helmet>
    {children}
  </div>
)

export default DefaultLayout
