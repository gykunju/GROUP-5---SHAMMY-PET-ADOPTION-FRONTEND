import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* Add more navigation links */}
          </ul>
        </nav>

        <Switch>
          {/* ...other routes */}
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
