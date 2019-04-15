const initState = {
  posts: [{id:1, text:'sup'}, {id:2, text:'hey'}, {id:3, text:'what?'}]
}

const rootReducer = (state = initState, action) => {

  if(action.type === 'DELETE_POST'){
    console.log(state);
    let newPosts = state.posts.filter(post=>post.id !== action.id)
    state = {...state,posts: newPosts}
    return{...state,posts: newPosts}
  }

  console.log(state, action);

  return state;

}

export default rootReducer;
