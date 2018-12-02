import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return(
    <div>
      {props.postList.map((post, index) =>
        <Post
          title={post.title}
          author={post.author}
          quote={post.quote}
          content={post.content}
          formattedWaitTime={post.formattedWaitTime}
          key={post.id}
        />
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
