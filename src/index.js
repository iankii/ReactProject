import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import App from './pages/App';
import AboutUs from './pages/AboutUs';
import BlogPreview from './components/BlogPreview/BlogPreview';
import Blog from './pages/Blog';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
  <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={ App }>
      {/* <IndexRoute component={ Home } /> */}
      <Route path="aboutus" component={ AboutUs } />
      <Route path="blogs" component={ BlogPreview } />
      <Route path="blogs/:blog" component={ Blog } />
      {/* <Route path="blogs/blog-1" component={ BlogCreater } /> */}
      {/* <Route path="blogs" component={ Blogs } /> */}
    </Route>
  </Router>,
  document.getElementById('app')
);