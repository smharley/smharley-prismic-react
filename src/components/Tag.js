import React from 'react'
import styled from 'styled-components'

const Tag = ({ tag }) => {
  return (
    <TagItem>
      {tag}
    </TagItem>
  )
}

const TagItem = styled.li`
  font-weight: 900;
`

export default Tag
