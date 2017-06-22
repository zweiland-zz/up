import React from 'react';
import PropTypes from 'prop-types';

const { string } = PropTypes;
const propTypes = {

};

function SingleBlogPost(props) {
  return (
    <div className="panel panel-default content-well">
      <div className="panel-body">
        <h4>From the BlueHost Blog</h4>
        <div className="col-md-3">
          <img src="/images/blog-thumb.png" alt="Blog Thumb" />
        </div>
        <div className="col-md-9">
          <p><strong>8 Outstanding Ways to Promote Your Website</strong></p>
          <p>There are many metrics you can use to measure the success of your website, from bounce rate to traffic...</p>
          <p><a href="">Read More</a></p>
        </div>
      </div>
    </div>
);
}

SingleBlogPost.propTypes = propTypes;
export default SingleBlogPost;
