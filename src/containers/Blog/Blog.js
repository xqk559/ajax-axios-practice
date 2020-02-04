import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';
import Posts from './Posts/Posts';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" 
                                         exact 
                                         activeClassName="my-active"
                                         activeStyle={{
                                            color: '#fa923f',
                                            textDecoration: 'underline'
                                         }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/newpost',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <br />
                <br />
                <br />
                <Switch>
                    {/* ORDER IS IMPORTANT HERE */}
                    <Route path="/newpost" exact component={NewPost} />
                    <Route path="/posts/:id" exact component={FullPost} />
                    <Route path="/" component={Posts} />
                    <Redirect from='/' to='/posts/' />
                </Switch>
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