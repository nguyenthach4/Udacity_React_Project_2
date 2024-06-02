import { Provider } from "react-redux";
import Dashboard from "../../../pages/dashboard/dashboard";
import { render } from '@testing-library/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import store from "../../testutility/store";
import Leaderboard from "../../../pages/leaderboard/leaderboard";

describe("leaderboard", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <Router>
         <Leaderboard></Leaderboard>
          <Routes>
            <Route path={"/"} element={<Dashboard />}></Route>
            <Route path={"/leaderboard"} element={<Leaderboard />}></Route>
          </Routes>
        </Router>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
