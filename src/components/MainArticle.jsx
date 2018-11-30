import React from "react";
import MainContent from "./MainContent";
import PostList from './PostList';
import NewPostControl from './NewPostControl';
import Moment from 'moment';

class MainArticle extends React.Component{
  constructor() {
    super();
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updatePostElapsedWaitTime(),
      5000
    );
  }
  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }
  updatePostElapsedWaitTime() {
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.forEach((post) =>
      post.formattedWaitTime = (post.timeOpen).fromNow(true)
    );
    this.setState({masterPostList: newMasterPostList});
  }
  handleAddingNewPostToList(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
    newPost.formattedWaitTime = (newPost.timeOpen).fromNow(true)
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  render(){
    var MainArticleStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      marginBottom: '4em',
      marginTop: '2em',
    };
    return (
      <div>
        <div style={MainArticleStyle}>
          <div>
          <MainContent/>
          <PostList
          postList={this.state.masterPostList}/>
          <NewPostControl
          onNewPostCreation={this.handleAddingNewPostToList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainArticle;
