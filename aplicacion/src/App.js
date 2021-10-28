import "./App.css";
import Login from "./pages/Login.js";
import Dashboard from "./pages/Dashboard.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact patch="/" component={Login} />
          <Route
            exact
            path="/dashboard"
            component={() => <Dashboard authorized={true} />}
          />
          <Route exact patch="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
