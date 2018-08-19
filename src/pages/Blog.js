import React from 'react';
import BlogCreater from '../components/BlogTabPanel/BlogCreater';

var blogs = [
  {
    name: "Lets start Web Developement",
    summary: 'summary for demo 0summary for demo 0summary for demo 0summary for demo 0summary for demo 0summary for demo 0summary for demo 0summary for demo 0summary for demo 0summary for demo 0summary for demo 0summary for demo 0summary for demo 0summary for demo 0summary for demo 0summary for demo 0summary for demo 0',
    content: 'content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo 0content for demo <h1>heading</h1> 0content for demo 0content for demo 0content for demo 0',
    blogIndex: 'blog-0'
  },
  {
    name: 'demo-1',
    summary: 'summary for demo 1',
    content: 'content for demo 1',
    blogIndex: 'blog-1'
  }
]

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: blogs
    };
  }

  render() {
    return (
      <div className="blog-preview-container">
        {this.state.blogs.map((blog, index) => {
          if (this.props.params.blog === blog.blogIndex) {
            return (<BlogCreater name={blog.name} summary={blog.summary} content={blog.content} blogIndex={blog.blogIndex}/>)
          }
        })

        }
      </div>
    )
  }
}

export default Blog;