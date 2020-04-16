import Prismic from 'prismic-javascript'

export const accessToken = process.env.REACT_APP_API_TOKEN
export const apiEndpoint = process.env.REACT_APP_API_URL
export const prismicClient = Prismic.client(apiEndpoint, { accessToken })

export const linkResolver = (doc) => {
  if (doc.type === 'blog_post') {
    return '/blog/' + doc.uid
  }

  return '/'
}
