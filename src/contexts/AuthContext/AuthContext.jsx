import { createContext, useState } from "react"


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)
const [error, setError] = useState('')



const logout = () => {
    setUser(null)
}

  return (
    <AuthContext.Provider value={{user, signup, login, logout, error}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
