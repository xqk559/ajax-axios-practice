import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
// import axios from 'axios';
import axios from '../../axios';
import Posts from './Posts/Posts';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href= "/">Home</a></li>
                            <li><a href= "/newpost">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <br />
                <Posts />
                {/* <section className="Posts">
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;