import React from 'react'
import SystemLayout from '../components/SystemLayout'
import { createContext } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { Navigate } from 'react-router'
const Home = () => {
  const {currentUser} = useContext(AuthContext);
  if(currentUser==null) return <Navigate to="/login"></Navigate>
  return (
    <SystemLayout>
      <h1>
        Hello! Dear {currentUser?.username}
      </h1>
          <div>Management System V1.0</div>
          <h1>Main Function:</h1>
          <h2>Product Create delete update</h2>
          <h2>Permission Control(Developing)</h2>
          <h2>Export Quotation PDF</h2>
          <div className="intro">
            <p>Developer:Wenliang Yu</p>
            <p>Contact me</p>
            <h1>
            T:18302112860(Wechat)
            </h1>
          </div>
    </SystemLayout>
  )
}

export default Home