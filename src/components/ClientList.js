import React from 'react'
import styled from 'styled-components'
import { Client } from './'

const ClientList = ({ clients }) => {
  return (
    <div>
      <h2>
        Client List
      </h2>
      <StyledClientList>
        {clients.map((client, i) => (
          <Client clientData={client} key={i} />
        ))}
      </StyledClientList>
    </div>
  )
}

const StyledClientList = styled.ul`
  list-style: none;
`

export default ClientList
