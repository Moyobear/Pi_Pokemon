import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/">
        <Landing />
      </Route>

      <Route exact path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
