import { Detail, Form, Home, Landing, About, Update, Page404 } from "./views";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import style from "./styles/App.module.css";

function App() {
  const location = useLocation();

  return (
    <div className={style.container}>
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

      <Route path="/detail/:detailId">
        <Detail />
      </Route>

      <Route path="/update">
        <Update />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="*">
        <Page404 />
      </Route>
    </div>
  );
}

export default App;
