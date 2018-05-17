const initialState = {
  data: [],
  dataUser: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOCALSTORAGE':
      return {
        ...state,
        data: [action.payload]
      }
    case 'CLEAR_LOCALSTORAGE':
      return {
        data: state.data.filter((item, index) => item.id !== action.payload)
      }
    case 'GET_USER_PROFILE':
      return {
        ...state,
        dataUser: action.payload
      }
    default:
      return state
  }
}

export default reducer