import Immutable from 'seamless-immutable'

export const initialState = Immutable({
  loader: true,
  posts: []
})

export const Actions = {
  LOAD_CONTENT: "LOAD_CONTENT",
  REQUEST_POSTS: "REQUEST_POSTS",
  RECEIVE_POSTS: "RECEIVE_POSTS"
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


    default:
      return state
  }
}
