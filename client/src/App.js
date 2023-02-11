import { Detail, Form, Home, Landing } from "./views";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/">
        <Landing />
      </Route>

      <Route path="/create">
        <Form />
      </Route>

      <Route path="/detail">
        <Detail />
      </Route>

      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
