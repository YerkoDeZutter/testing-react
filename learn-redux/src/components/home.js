import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Home = (props) => {

  const allPosts = props.posts.map(post=>{
    return(
      <div key={post.id}>
        <h2><Link to={'/' + post.id}>{post.text}</Link></h2>
      </div>
    )
  })

    return(
      <div>
        {console.log(props.posts)}
        {allPosts}
      </div>
    )
}

const mapStateToProps = (state) => {

  console.log(state);

  return{posts: state.posts}


}

export default connect(mapStateToProps)(Home);
