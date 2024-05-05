import { getInitialData } from "../../utils/api";
import { getAllUsers } from "../users/user";
import { getAllQuestions } from "../questions/questions";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getAllUsers(users));
      dispatch(getAllQuestions(questions));
    //  dispatch(setAuthedUser(authedUser));
    });
  };
}
