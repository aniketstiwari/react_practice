import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: ""
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts1')
            .then(response => {
                console.log(response);
                this.setState({posts: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({error: "Error Retrieving the data"})
            })
    }
    
    render() {
        const {posts, error} = this.state;
        return (
            <div>
                List of Post
                {
                    posts.length ?
                    posts.map( post => (
                        <div key={post.id}>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    )) : null
                }
                {/*if posts is an empty array then we will render null */}
                { error ? <div>error</div> : null}
            </div>
        );
    }
}

export default PostList;