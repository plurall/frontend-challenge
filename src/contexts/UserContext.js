import React, { createContext, useState } from 'react'

const UserContext = createContext()

// eslint-disable-next-line
export function UserProvider({ children }) {
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
