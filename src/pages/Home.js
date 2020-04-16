import React, { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { Predicates } from 'prismic-javascript'

import { DefaultLayout } from '../layouts'
import { Hero, ClientList } from '../components'
import { client, linkResolver } from '../prismic-configuration'

const Home = () => {
  const [prismicData, setPrismicData] = useState({ homeDoc: null, clients: null })

  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const homeDoc = await client.getSingle('home')
        const clients = await client.query(
          Predicates.at('document.type', 'client'),
            { orderings: '[my.post.date desc]' }
        );

        if (homeDoc) {
          setPrismicData({ homeDoc: homeDoc, clients: clients.results })
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
