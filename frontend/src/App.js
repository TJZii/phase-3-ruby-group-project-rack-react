import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Genre from './containers/Genre';
import Genres from './containers/Genres';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/genres" component={Genres} />
          <Route exact path="/genres/:id" component={Genre} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
