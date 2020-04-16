import React, { useEffect } from 'react'
import { RichText } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import { client } from './prismic-configuration'
import './App.css'

function App () {
  const [doc, setDocData] = React.useState(null)

  /* eslint-disable no-unused-vars */
  useEffect(() => {
    const fetchPrismicData = async () => {
      const response = await client.query(
        [Prismic.Predicates.at('document.type', 'blog_post'),
          Prismic.Predicates.at('document.tags', ['featured'])],
        { pageSize: 25, page: 1, orderings: '[my.blog_post.date desc]' }
      ).then(response => {
        if (response) {
          setDocData(response.results[0])
        }
      })
    }
    fetchPrismicData()
  }, [])
  /* eslint-enable no-unused-vars */

  return (
    <>
      {
        doc ? (
          <div>
            <h1>{RichText.asText(doc.data.blog_title)}</h1>
          </div>
        ) : <div>No content</div>
      }
    </>
  )
}

export default App
