import React, { useEffect } from 'react'
import { Date, Link, RichText } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import { client, linkResolver } from './prismic-configuration'
import logo from './logo.svg'
import './App.css'

function App() {
  const [doc, setDocData] = React.useState(null)

  useEffect(() => {
    const fetchPrismicData = async () => {
      const response = await client.query(
        [ Prismic.Predicates.at('document.type', 'blog_post'),
          Prismic.Predicates.at('document.tags', ['featured']) ],
          { pageSize: 25, page: 1, orderings: '[my.blog_post.date desc]' }
      ).then(response => {
        if (response) {
          setDocData(response.results[0])
        }
      })
    }
    fetchPrismicData()
  }, [])

  return (
    <React.Fragment>
      {
        doc ? (
          <div>
            <h1>{RichText.asText(doc.data.blog_title)}</h1>
          </div>
        ) : <div>No content</div>
      }
    </React.Fragment>
  )
}

export default App
