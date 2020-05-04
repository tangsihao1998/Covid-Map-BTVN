import React from 'react';
import './App.css';

import { BrowserRouter as Router,Route,Switch }  from 'react-router-dom'
import { withRouter } from 'react-router'

import MapPage from './pages/mapPage/mapPage';
import HomePage from './pages/homePage/homePage';
import ChartPage from './pages/chartPage/chartPage';
import Header from './components/header/header';

// Scroll To Top Component
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}
const Scroll = withRouter(ScrollToTop);

function App() {
  return (
    <Router>
      <div className="App">
        <Scroll>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/map' component={MapPage} />
            <Route exact path='/stats' component={ChartPage} />
          </Switch>
        </Scroll>
      </div>
    </Router>
  );
}

export default App;
