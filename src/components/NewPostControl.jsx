import React from 'react';
import NewPostForm from './NewPostForm';
import PropTypes from 'prop-types';

class NewPostControl extends React.Component{
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

  render() {
    return(
      <div>
      <NewPostForm
      onNewPostCreation={this.handleAddingNewPostToList}
      />
      </div>
    );
  }
}

export default NewPostControl;
