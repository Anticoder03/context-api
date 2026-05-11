import React, { useContext } from 'react'
import UserContext from './context/UserContext'

const Context_API = () => {
  const data = useContext(UserContext) || {}
  const user = data.user || {}

  return (
    <div>
      <h1>{user.name ?? 'Unknown'}</h1>
      <p>{user.email ?? 'No email'}</p>
      <p>Number: {data.num ?? '-'}</p>
    </div>
  )
}

export default Context_API
