import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../../../pages/login/login";
import store from "../../testutility/store";

describe("login", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path={"/"} element={<Login />}></Route>
          </Routes>
        </Router>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });

  it("Login failed", () => {
    var component = render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path={"/"} element={<Login></Login>}></Route>
          </Routes>
        </Router>
      </Provider>
    );

    var select = component.getByTestId("test-user-select");
    fireEvent.change(select, { target: { value: "" } });

    var submit = component.getByTestId("test-submit");

    expect(select).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
    expect(submit).toBeDisabled();
  });
});
