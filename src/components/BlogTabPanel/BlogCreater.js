import React from 'react';
import BlogContainer from './BlogContainer'

class BlogCreater extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div className="blogs-container">
        <BlogContainer state={this.props}/>
      </div>
    )
  }
}

export default BlogCreater;