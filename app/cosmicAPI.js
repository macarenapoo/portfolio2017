import Cosmic from 'cosmicjs'

export function loadPosts() {
    return function(dispatch) {
      return getAllPosts().then( posts => {
          console.log(posts)
          dispatch(loadPostsSuccess(posts))
        }).catch( error => {
          throw(error)
        })
    }
}

const bucket = { slug: 'macarenapoo'};

function getAllPosts() {
  return new Promise( (resolve) => {
    Cosmic.getObjects({ bucket }, (error, response) => {
      resolve(response.objects.all)
    })
  })
}

function loadPostsSuccess(posts) {
  return {type: "RECEIVE_POSTS", posts}
}
