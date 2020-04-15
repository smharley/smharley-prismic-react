import React from 'react';
import linkResolver from './prismic-configuration';
import logo from './logo.svg';
import './App.css';

import Prismic from 'prismic-javascript'
import { Date, Link, RichText } from 'prismic-reactjs'

const apiEndpoint = process.env.REACT_APP_API_URL
const accessToken = process.env.REACT_APP_API_TOKEN
const Client = Prismic.client(apiEndpoint, { accessToken })

function App() {
  const [doc, setDocData] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'blog_post')
      )
      if (response) {
        setDocData(response.results[0])
      }
    }
    fetchData()
  }, []);

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

export default App;
