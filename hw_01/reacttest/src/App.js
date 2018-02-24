import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './appStyle.css';

import Home from './Home';
import About from './About';
import Photos from './Photos';
import Blog from './Blog';
import Contact from './Contact';

class LinkRouter extends React.Component {
  render() {
    return (
        <Router history={createHistory()}>
           <div>
             <ul className="navigation">
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link></li>
                 <li><Link to="/photos">Photos</Link></li>
                 <li><Link to="/blog">Blog</Link></li>
                 <li><Link to="/contact">Contact</Link></li>
             </ul>

             <Route exact path="/" component={Home} />
             <Route exact path="/about" component={About} />
             <Route exact path="/photos" component={Photos} />
             <Route exact path="/blog" component={Blog} />
             <Route exact path="/contact" component={Contact} />
           </div>
        </Router>
    );
  }
}

export default LinkRouter;