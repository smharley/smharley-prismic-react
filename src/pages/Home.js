import React, { useEffect, useState } from 'react'
import { Predicates } from 'prismic-javascript'

import { DefaultLayout } from '../layouts'
import { Hero, ClientList } from '../components'
import { prismicClient } from '../configuration/prismic-configuration'

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
    const homeDoc = prismicData.homeDoc
    const clients = prismicData.clients

    return (
      <DefaultLayout seoTitle={homeDoc.data.home_heading_text} layoutClass={homeDoc.type}>
        <Hero
          heading={homeDoc.data.home_heading}
        />
        <ClientList clients={clients} />
      </DefaultLayout>
    )
  } else {
  }
  return null
}

export default Home
