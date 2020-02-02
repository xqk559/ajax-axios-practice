import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
// import axios from 'axios';
import axios from '../../axios';
import Posts from './Posts/Posts';
import {Route} from 'react-router-dom';

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
                <br />
                <br />
                <Route path="/" exact render={() => <h1>Home</h1>} />
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