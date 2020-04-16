import React from 'react'
import styled from 'styled-components'

const Tag = ({ tag, tagId }) => {
  if (tagId === 'front_end') {
    return (
      <FeTagItem data-tagId={tagId}>
        {tag}
      </FeTagItem>
    )
  } else if (tagId === 'product_design_sprint') {
    return (
      <PdsTagItem data-tagId={tagId}>
        {tag}
      </PdsTagItem>
    )
  } else if (tagId === 'product_design') {
    return (
      <PdTagItem data-tagId={tagId}>
        {tag}
      </PdTagItem>
    )
  } else if (tagId === 'react') {
    return (
      <ReactTagItem data-tagId={tagId}>
        {tag}
      </ReactTagItem>
    )
  } else if (tagId === 'research') {
    return (
      <ResearchTagItem data-tagId={tagId}>
        {tag}
      </ResearchTagItem>
    )
  } else if (tagId === 'ui') {
    return (
      <UiTagItem data-tagId={tagId}>
        {tag}
      </UiTagItem>
    )
  } else {
    return (null)
  }
}

const TagItem = styled.li`
  font-weight: 900;
  display: inline-flex;
  margin-right: 10px;
  padding: 8px 20px;
`

const FeTagItem = styled(TagItem)`
  color: yellow;
`

const PdsTagItem = styled(TagItem)`
  color: purple;
`

const PdTagItem = styled(TagItem)`
  color: orange;
`

const ReactTagItem = styled(TagItem)`
  color: blue;
`

const ResearchTagItem = styled(TagItem)`
  color: pink;
`

const UiTagItem = styled(TagItem)`
  color: green;
`

export default Tag
