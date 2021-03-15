import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/items/:id">
          <Detail />
        </Route>
        <Route path="/items">
          <Results />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
