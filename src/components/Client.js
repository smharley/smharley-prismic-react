import React from 'react'

const Client = ({ clientData }) => {
  const client = clientData.data

  return (
    <li className="client-list-item">
      <p>
        {client.client_name[0].text}
      </p>
    </li>
  )
}

export default Client
