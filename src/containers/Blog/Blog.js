import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';
import Posts from './Posts/Posts';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import asyncComponent from '../../hoc/AsyncComponent';

const AsyncNewPost = asyncComponent(()=> {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

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
                    {this.state.auth ? <Route path="/newpost" exact component={AsyncNewPost} /> : null}
                    <Route path="/posts/:id" exact component={FullPost} />
                    <Route path="/" component={Posts} />
                    <Route render={()=> <h1>Not Found</h1>} />
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