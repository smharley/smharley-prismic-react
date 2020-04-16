import React from 'react'
import { Tag } from './'

const ClientTags = ({ clientTags }) => {
  if (clientTags) {
    return (
      <ul className="client-tag-list">
        {clientTags.map((tag) => (
          <Tag tag={tag} key={tag.id} />
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
