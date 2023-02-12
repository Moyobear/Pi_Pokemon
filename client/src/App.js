import { Detail, Form, Home, Landing, About } from "./views";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/">
        <Landing />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/create">
        <Form />
      </Route>

      <Route path="/detail">
        <Detail />
      </Route>

      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
