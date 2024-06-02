import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import store from "../../testutility/store";
import Dashboard from "../../../pages/dashboard/dashboard";
import NewQuestion from "../../../pages/poll/createpoll";

describe("createpoll", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path={"/"} element={<Dashboard></Dashboard>}></Route>
            <Route
              path={"/create-poli"}
              excact
              element={<NewQuestion></NewQuestion>}
            ></Route>
          </Routes>
        </Router>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });

  it("Create Poli success", () => {
    var component = render(
      <Provider store={store}>
        <Router>
          <NewQuestion></NewQuestion>
          <Routes>
            <Route path={"/"} element={<Dashboard />}></Route>
            <Route path={"/add"} element={<NewQuestion />}></Route>
          </Routes>
        </Router>
      </Provider>
    );

    var optionOne = component.getByTestId("test-option-one");
    fireEvent.change(optionOne, { target: { value: "" } });

    var optionTwo = component.getByTestId("test-option-two");
    fireEvent.change(optionTwo, { target: { value: "option two text" } });

    var submit = component.getByTestId("test-submit");

    expect(optionOne).toBeInTheDocument();
    expect(optionTwo).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  it("Create Poli failed", () => {
    var component = render(
      <Provider store={store}>
        <Router>
          <NewQuestion></NewQuestion>
          <Routes>
            <Route path={"/"} element={<Dashboard />}></Route>
            <Route path={"/add"} element={<NewQuestion />}></Route>
          </Routes>
        </Router>
      </Provider>
    );

    var optionOne = component.getByTestId("test-option-one");
    fireEvent.change(optionOne, { target: { value: "option one text" } });

    var optionTwo = component.getByTestId("test-option-two");
    fireEvent.change(optionTwo, { target: { value: "option two text" } });

    var submit = component.getByTestId("test-submit");

    expect(optionOne).toBeInTheDocument();
    expect(optionTwo).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });
});
