import React from 'react';

class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div className="blog-container">
        <div className="blog-title">{this.props.state.name}</div>
        <div className="blog-summary">{this.props.state.summary}</div>
        <div className="blog-content">{this.props.state.content}</div>
      </div>

    )
  }
}

export default BlogContainer;