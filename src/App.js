import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import "./css/main.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/page3" exact component={Homepage} />
        <Route path="/page4" exact component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
