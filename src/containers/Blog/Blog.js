import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';
import Posts from './Posts/Posts';
import {Route, Link} from 'react-router-dom';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/newpost',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <br />
                <br />
                <br />
                <Route path="/" exact component={Posts} />
                <Route path="/newpost" exact component={NewPost} />
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
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