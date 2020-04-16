import React from 'react'
import styled from 'styled-components'
import { Tag } from './'

const TagList = ({ tags }) => {
  if (tags) {
    const tagItems = tags.map((tag, i) => (
      <Tag tag={tag} tagId={tag.replace(/ /g, '_').toLowerCase()} key={i} />
    ))

    return (
      <StyledTagList>{tagItems}</StyledTagList>
    )
  } else {
    return (
      null
    )
  }
}

const StyledTagList = styled.ul`
  list-style: none;
  padding: 0;
`

export default TagList
