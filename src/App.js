import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./layouts/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/Aboutus";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/aboutus" component={AboutUs} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
