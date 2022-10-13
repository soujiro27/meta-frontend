import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeUi } from './ui'
import routes from '../../routes/routes.json'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    const direction = e.target.value
    navigate(routes[direction])
  }

  return (
    <HomeUi
      handleClick={handleClick}
    />
  )
}

export { Home }
