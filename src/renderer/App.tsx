import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './modules/Home';
// import ThreeTest from './modules/ThreeTest'
import './App.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/" component={ThreeTest} /> */}
      </Switch>
    </Router>
  );
}
