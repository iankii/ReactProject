import React from 'react';
import { IndexLink, Link } from 'react-router';
class BlogPreviewCreater extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="preview">
        <p className="preview-title"><span>Blog preview title</span></p>
        <p className="preview-content"><span>Blog preview content</span></p>
        <p className="preview-content"><Link to={`blogs/${this.props.name}`}>Click to Read Full Article</Link></p>
      </div>
    )
  }
}

export default BlogPreviewCreater;