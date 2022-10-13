import { CREATE_CLIENT, GET_ALL_CLIENTS } from '../types'

const initialState = {
  success: false,
  error_message: false,
  data: []
}

const client = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CLIENT:
      return {
        ...state,
        success: true
      }
    case GET_ALL_CLIENTS:
      return {
        ...state,
        data: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export { client }
