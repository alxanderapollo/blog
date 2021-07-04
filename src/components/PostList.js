import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
class PostList extends React.Component {
    //return fetch posts
    componentDidMount(){
        this.props.fetchPosts();
    }
    render() {
        return <div>Post List</div>;
    }
}
//null meaning we dont have an states that we want to change
//fetch posts is our action creator
export default connect(null,{fetchPosts})(PostList);