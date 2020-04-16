import React from 'react'
import { Client } from './'

const ClientList = ({ clients }) => {
  return (
    <div className='client-list-container'>
      <h2 className='client-list-heading'>
        Client List
      </h2>
      <ul className='client-list'>
        {clients.map((client, i) => (
          <Client clientData={client} key={i} />
        ))}
      </ul>
    </div>
  )
}

export default ClientList
