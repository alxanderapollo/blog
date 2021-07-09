import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
class PostList extends React.Component {
    //return fetch posts
    componentDidMount(){
        this.props.fetchPosts();
    }
    render() {
        console.log('First time it renders: ' + this.props.posts)
        return <div>Post List</div>;
    }
}
//anytime we want to get information from our redux state into our react components we need to create a MAP to state function
//in this case our reducer is assigned a posts, so that means our state object will have something called posts
//now every time our reducers run, mapStateToProps will be called again
const mapStateToProps = (state) =>{
    return{posts: state.posts};
}

//null meaning we dont have an states that we want to change
//fetch posts is our action creator
export default connect(mapStateToProps,{fetchPosts})(PostList);