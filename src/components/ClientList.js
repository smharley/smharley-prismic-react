import React from 'react'
import { Client } from '../components'

const ClientList = ({ clients }) => {
  return (
    <ul className="client-list">
      {clients.map((client) => (
        <Client clientData={client} key={client.id} />
      ))}
    </ul>
  )
}

export default ClientList
