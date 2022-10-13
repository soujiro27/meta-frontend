import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import routes from './routes.json'
import { Layout } from '../pages/Layout'
import { Home } from '../pages/home'
import { Create } from '../pages/Create'
import { Clients } from '../pages/Clients'

/**
 * made by: JC
 * Description: react router file
 * @param {*}
 */

const App = () => (
  <Routes>
    <Route path={`${routes.home}`} element={<Home />} />
      <Route element={<Layout />}>
      <Route path={`${routes.home}`} element={<Home />} />
      <Route path={`${routes.create}`} element={<Create />} />
      <Route path={`${routes.list}`} element={<Clients />} />
    </Route >
    </Routes>
)

export { App }
