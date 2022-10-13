import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClients } from '../../actions/clients.action'
import { ClientCard } from './Ui'

const Clients = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getClients())
  }, [])

  const clients = useSelector(store => store.client.data)

  return (
    <>
      <h2>Listado de clientes</h2>
      {
        clients.map(client => (
          <ClientCard
            key={client._id}
            client={client}
          />
        ))
      }
    </>
  )
}

export { Clients }
