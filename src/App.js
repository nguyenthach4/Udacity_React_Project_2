import "./App.css";
import { useEffect, Fragment } from "react";
import { handleInitialData } from "./actions/shared/shared";
import { connect, useSelector } from "react-redux";
import Dashboard from "./pages/dashboard/dashboard";
import NavbarHeader from "./components/shared/navbarheader";
import NewQuestion from "./pages/poll/createpoll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Poll from "./pages/poll/poli";
import Leaderboard from "./pages/leaderboard/leaderboard";
import Login from "./pages/login/login";
import { useState } from "react";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  const userReducer = useSelector((state) => state.authedUser);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(userReducer != null);
  }, [userReducer]);

  return (
    <Fragment>
      <div className="container">
        <Router>
          <NavbarHeader></NavbarHeader>
          {!loggedIn ? (
            <Routes>
              <Route path={"*"} excact element={<Login />}></Route>
              <Route
                path={"/question/:id"}
                excact
                element={<Poll></Poll>}
              ></Route>
            </Routes>
          ) : (
            <Routes>
              <Route path={"/"} excact element={<Dashboard />}></Route>
              <Route path={"/leaderboard"} element={<Leaderboard />}></Route>
              <Route
                path={"/create-poli"}
                excact
                element={<NewQuestion></NewQuestion>}
              ></Route>
              <Route
                path={"/question/:id"}
                excact
                element={<Poll></Poll>}
              ></Route>
            </Routes>
          )}
        </Router>
      </div>
    </Fragment>
  );
};

export default connect()(App);
