import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const DefaultLayout = ({ layoutClass, seoTitle, children }) => {
  return (
    <Layout>
      <Helmet>
        <title>{seoTitle}</title>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap'
        />
      </Helmet>
      {children}
    </Layout>
  )
}

const Layout = styled.main`
  background-color: white;
`

export default DefaultLayout
