import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
class PostList extends React.Component {
    //return fetch posts
    componentDidMount(){
        this.props.fetchPosts();
    }
    renderList(){
        // each key in the map, is mapped with item from our end point
        //dispalying by post title and body
        return this.props.posts.map(post =>{
            <div className="item" key={post.id}>
                <i className="large middle aligned icon user"/>
                <div className="content">
                    <div className="description" >
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>
        })
    }
    render() {
        // console.log('First time it renders: ' + this.props.posts)
        return <div className="ui relaxed divided list">this.renderList()</div>;
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