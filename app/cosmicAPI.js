export function loadPosts() {
    return function(dispatch) {
      return getAllPosts().then( posts => {
          dispatch(loadPostsSuccess(posts))
        }).catch( error => {
          throw(error)
        })
    }
}

function getAllPosts() {
  return fetch("https://api.cosmicjs.com/v1/macarenapoo?pretty=true")
    .then( response => {
      return response.json()
    }).catch( error => {
      return error
    })
}

function loadPostsSuccess(posts) {
  return {type: "RECEIVE_POSTS", posts}
}
