import { CREATE_CLIENT, GET_ALL_CLIENTS } from '../types'
import { CallApi } from '../utils/requestHandler'

export const newClient = (data) => async (dispatchEvent) => {
  const url = '/clients'
  const {
    name,
    firstName,
    lastName,
    address,
    age,
    phone,
    email
  } = data

  await CallApi(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      firstName,
      lastName,
      address,
      age,
      phone,
      email
    })
  })
  dispatchEvent({ type: CREATE_CLIENT })
}

export const getClients = () => async (dispatchEvent) => {
  const url = '/clients'
  const res = await CallApi(url, {})

  dispatchEvent({
    type: GET_ALL_CLIENTS,
    payload: res
  })
}
