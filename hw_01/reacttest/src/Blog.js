import React, { Component } from 'react';
import {articles} from './info';
import './appStyle.css';

class Post extends Component {
    render(){
        return (
            <div className="wrapper">
                <div className="period">{this.props.date}</div>
                <img className="gif" src={this.props.gif} alt="" />
                <div className="post">
                    <h3>{this.props.titel}</h3>
                    <p>{this.props.text}</p>
                    <BlogList comments = {articles.comments} />
                </div>
            </div>
        )
    }
}

class BlogList extends Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render() {
        const text = this.state.isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button className="buttonComment" onClick = {this.toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }
    getBody(){
        if(!this.state.isOpen) return null

        const {comments} = this.props
        if(!comments || !comments.length) return <p>No comments yet!</p>

        /*return (
            <ul>
                {this.props.comments.map(function(index){
                    return(
                        <li key = {index.id}><Comment /></li>)    //comments={comments} />
                })
                }
            </ul>
        )*/

    }
    toggleOpen = ev => this.setState({
        isOpen: !this.state.isOpen
    })
}

/*function Comment({comments}) {
    return (
        <div>
            <p>{comments.text} <b>by {comments.user}</b></p>
        </div>
    )
}*/
class Comment extends Component {
    render() {
        return (
            <div>
                <p>{this.props.comments.text} <b>by {this.props.comments.user}</b></p>
            </div>
        )
    }
}

class Blog extends Component {
    render () {
        return (
            <div>
                <h2>Post</h2>
              {articles.map(function(elem){
                return <Post
                  key={elem.id}
                  date={elem.date}
                  titel={elem.titel}
                  text={elem.text}
                  gif={elem.gif}
              />
           })
        }
            </div>
        )
    }
}

export default Blog;