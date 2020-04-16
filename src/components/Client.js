import React from 'react'
import { TagList } from './'

const Client = ({ clientData }) => {
  const client = clientData.data

  return (
    <li>
      <h3>
        {client.client_name[0].text}
      </h3>
      <h4>
        {client.client_industry}
      </h4>
      <p>
        {client.client_description[0].text}
      </p>
      <TagList tags={clientData.tags} />
    </li>
  )
}

export default Client
