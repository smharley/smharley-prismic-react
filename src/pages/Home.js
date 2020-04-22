import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Predicates } from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

import { DefaultLayout } from '../layouts'
import { ClientList } from '../components'
import { linkResolver, prismicClient } from '../configuration/prismic-configuration'

const Home = () => {
  const [prismicData, setPrismicData] = useState({ homeDoc: null, clients: null })

  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const homeDoc = await prismicClient.getSingle('home')
        const clients = await prismicClient.query(
          Predicates.at('document.type', 'client'),
          {
            orderings: '[my.client.client_date desc]',
            pageSize: 100
          }
        )

        if (homeDoc) {
          setPrismicData({ homeDoc, clients: clients.results })
        } else {
          console.warn('Blog Home document was not found. Make sure it exists in your Prismic repository')
          // toggleNotFound(true)
        }
      } catch (error) {
        console.error(error)
        // toggleNotFound(true)
      }
    }

    fetchPrismicData()
  }, [])

  if (prismicData.homeDoc) {
    const document = prismicData.homeDoc
    const clients = prismicData.clients

    const pageContent = document.data.body.map(function (slice, index) {
      if (slice.slice_type === 'home_features') {
        const featureContent = slice.items.map(function (feature, featureIndex) {
          return (
            <div key={featureIndex}>
              {RichText.render(feature.feature_title, linkResolver)}
              {RichText.render(feature.feature_description, linkResolver)}
            </div>
          )
        })
        return (
          <div key={index}>
            {RichText.render(document.data.home_heading, linkResolver)}
            <Features>
              {featureContent}
            </Features>
          </div>
        )
      } else {
        return (null)
      }
    })

    return (
      <DefaultLayout seoTitle={document.data.home_heading_text} layoutClass={document.type}>
        <div>
          {pageContent}
        </div>
        <ClientList clients={clients} />
      </DefaultLayout>
    )
  } else {
    return null
  }
}

const Features = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;
`

export default Home
