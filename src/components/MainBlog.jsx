import React from "react";
import MainContent from "./MainContent";
import PostList from './PostList';
import { Link } from 'react-router-dom';

class MainBlog extends React.Component{
  constructor() {
    super();
    this.state = {
      masterPostList: []
    };
  }

  render(){
    var MainBlogStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      marginBottom: '4em',
      marginTop: '2em',
    };
    return (
      <div>
        <div style={MainBlogStyle}>
          <div>
          <MainContent/>
          <Link to="/NewPostControl">new post</Link>
          <PostList
          postList={this.state.masterPostList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBlog;
