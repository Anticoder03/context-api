import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
  const user = {
    name: 'rohit',
    email: 'rohit@gmail.com',
  }

  const num = 23
  const color = 'red'

  return (
    <UserContext.Provider value={{ user, num, color }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
