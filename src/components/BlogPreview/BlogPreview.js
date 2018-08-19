import React from 'react';
import BlogPreviewCreater from './BlogPreviewCreater'

class BlogPreview extends React.Component {
  render() {
    return (
      <div className="previews-container">
        <BlogPreviewCreater name="blog-0"/>
        {/* {/* <BlogPreviewCreater name="blog-1"/>
        <BlogPreviewCreater name="blog-1"/> */}
        {/* <BlogPreviewCreater name="blog-1"/>
        <BlogPreviewCreater name="blog-1"/>
        <BlogPreviewCreater name="blog-1"/>
        <BlogPreviewCreater name="blog-1"/>
        <BlogPreviewCreater name="blog-1"/> */}
        <BlogPreviewCreater name="blog-1"/>
        {/* <BlogPreviewCreater name="blog-1"/>
        <BlogPreviewCreater name="blog-1"/>
        <BlogPreviewCreater name="blog-1"/>
        <BlogPreviewCreater name="blog-1"/> */}
      </div>
    )
  }
}

export default BlogPreview;