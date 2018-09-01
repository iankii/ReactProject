import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import App from './ContainerComponents/App';
import AboutUs from './ContainerComponents/AboutUs';
import BlogPreview from './components/BlogPreview/BlogPreview';
import Blog from './ContainerComponents/Blog';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
  <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={ App }>
      <Route path="aboutus" component={ AboutUs } />
      <Route path="blogs" component={ BlogPreview } />
      <Route path="blogs/:blog" component={ Blog } />
    </Route>
  </Router>,
  document.getElementById('app')
);