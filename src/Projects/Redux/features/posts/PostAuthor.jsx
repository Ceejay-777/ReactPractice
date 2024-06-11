import React from 'react'
import { useSelector } from 'react-redux'
import { allUsers } from '../users/usersSlice'

const PostAuthor = ({userId}) => {
    const users = useSelector(allUsers)
    const author = users.find(user => user.id === userId)
  return (
    <p className='text-right'>by {author ? author.name : "Anonymous"}</p>
  )
}

export default PostAuthor