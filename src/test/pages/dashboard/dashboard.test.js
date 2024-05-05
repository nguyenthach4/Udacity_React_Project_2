import { Provider } from "react-redux";
import Dashboard from "../../../pages/dashboard/dashboard";
import { render } from '@testing-library/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import store from "../../testutility/store";

describe("dashboard", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <Router>
          <Dashboard></Dashboard>
          <Routes>
            <Route path={"/"} element={<Dashboard />}></Route>
          </Routes>
        </Router>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
