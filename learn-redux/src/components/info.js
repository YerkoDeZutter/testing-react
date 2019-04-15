import React from 'react';
import { connect } from 'react-redux';

const Info = (props) => {

  const deletePostStart = () => {
    props.deletePost(props.post.id);
    props.history.push('/');
  }

    return(
      <div>
        <h1>{props.post.text}</h1>
        <button onClick={deletePostStart}>DELETE</button>
      </div>
    )
}

const mapStateToProps = (state, ownProps) => {

  let id = parseInt(ownProps.match.params.id);

  return{post: state.posts.find(post=>post.id === id)}

}

const deletePost = (dispatch) => {

  return{deletePost: (id) => dispatch({type: 'DELETE_POST', id: id})}


}

export default connect(mapStateToProps, deletePost)(Info);
