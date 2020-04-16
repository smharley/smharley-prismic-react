import React from 'react'
import styled from 'styled-components'
import { Client } from './'

const ClientList = ({ clients }) => {
  return (
    <div>
      <Heading>
        Client List
      </Heading>
      <StyledClientList>
        {clients.map((client, i) => (
          <Client clientData={client} key={i} />
        ))}
      </StyledClientList>
    </div>
  )
}

const Heading = styled.h2`
  margin-top: 80px;
`

const StyledClientList = styled.ul`
  display: grid;
  gap: 40px;
  list-style: none;
  padding: 0;
`

export default ClientList
