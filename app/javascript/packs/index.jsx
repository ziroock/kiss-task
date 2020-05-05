// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from '../components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Adding Router, I essentially set up an indirect path for any route that
// will point initially to my App component. So now inside the App component
// I can actually establish all of the exact paths for my app using route and switch

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
        <Route path={"/"} component={App}/>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
