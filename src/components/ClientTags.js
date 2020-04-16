import React from 'react'
import { Tag } from './'

const ClientTags = ({ clientTags }) => {
  if (clientTags) {
    return (
      <ul className="client-tag-list">
        {clientTags.map((tag, i) => (
          <Tag tag={tag} key={i} />
        ))}
      </ul>
    )
  } else {
    return (
      null
    )
  }
}

export default ClientTags
