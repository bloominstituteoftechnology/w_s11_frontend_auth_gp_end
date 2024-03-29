import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function StarsList() {
  const [stars, setStars] = useState([])
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      logout()
    } else {
      const fetchStars = async () => {
        try {
          const response = await axios.get(
            '/api/stars',
            { headers: { Authorization: token } })
          setStars(response.data)
        } catch (error) {
          if (error?.response?.status == 401) {
            logout()
          }
        }
      }
      fetchStars()
    }
  },[navigate])

  return (
    <div className="container">
      <h3>StarsList <button onClick={logout}>Logout</button></h3>
      {stars.length > 0 ? (
        <div>
          {stars.map((star) => (
            <div key={star.id} style={{ marginBottom: '20px' }} className="star">
              <h4>{star.fullName}</h4>
              <p>Born: {formatDate(star.born)}</p>
              <p>{star.bio}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No stars found.</p>
      )}
    </div>
  )
}
