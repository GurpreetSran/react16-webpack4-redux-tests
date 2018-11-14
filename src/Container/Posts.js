import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_POST } from '../store/actions';

class Posts extends Component {
    render() {
        return ( 
            <React.Fragment>
                <button onClick={this.props.addPost}>
                    Add Post
                </button>
                {
                    this.props.posts.map((post, index) => {
                        return <div key={index}> {post.title} </div>
                    })
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state.posts;
};


const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (val) => dispatch({type: ADD_POST})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);