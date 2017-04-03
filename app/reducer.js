import Immutable from 'seamless-immutable'

export const initialState = Immutable({
  loader: true,
  posts: [],
  showDetails: false,
  activePost: null
})

export const Actions = {
  LOAD_CONTENT: "LOAD_CONTENT",
  REQUEST_POSTS: "REQUEST_POSTS",
  RECEIVE_POSTS: "RECEIVE_POSTS",
  SHOW_DETAILS: "SHOW_DETAILS",
  SET_ACTIVE_POST: "SET_ACTIVE_POST"
}

export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.LOAD_CONTENT:
      return state.set("loader", action.value )

    case Actions.REQUEST_POSTS: {
      const posts = loadPosts()

      return state.set("loader", true);
    }

    case Actions.RECEIVE_POSTS: {
      return Immutable.merge(state, {
        loader: true,
        posts: action.posts
      });
    }

    case Actions.SHOW_DETAILS: {
      return state.set("showDetails", true)
    }

    case Actions.SET_ACTIVE_POST: {
      return state.set("activePost", action.postID)
    }

    default:
      return state
  }
}
