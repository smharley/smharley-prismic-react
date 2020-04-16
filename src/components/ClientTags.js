import React from 'react'
import styled from 'styled-components'
import { Tag } from './'

const ClientTags = ({ tags }) => {
  if (tags) {
    return (
      <StyledTagList>
        {tags.map((tag, i) => (
          <Tag tag={tag} key={i} />
        ))}
      </StyledTagList>
    )
  } else {
    return (
      null
    )
  }
}

const StyledTagList = styled.ul`
  list-style: none;
`

export default ClientTags
