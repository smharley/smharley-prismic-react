import React from 'react'
import { ClientTags } from './'

const Client = ({ clientData }) => {
  const client = clientData.data
  const clientTags = clientData.tags

  return (
    <li className='client-list-item'>
      <h3>
        {client.client_name[0].text}
      </h3>
      <h4>
        {client.client_industry}
      </h4>
      <p>
        {client.client_description[0].text}
      </p>
      <ClientTags clientTags={clientTags} />
    </li>
  )
}

export default Client
