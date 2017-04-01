import Immutable from 'seamless-immutable'

export const initialState = Immutable({
  loader: true
})

export const Actions = {
  LOAD_CONTENT: "LOAD_CONTENT"
}

export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.LOAD_CONTENT:
      return state.set("loader", action.value )

    default:
      return state
  }
}
