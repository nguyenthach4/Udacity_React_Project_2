import { saveQuestion, saveQuestionAnswer } from "../../utils/api";
import { saveAnswer, saveQuestionUser } from "../users/user";

export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS";
export const ADD_QUESTIONS = "ADD_QUESTIONS";
export const TOGGLE_QUESTIONS = "TOGGLE_QUESTIONS";

function addQuestion(question) {
  return {
    type: ADD_QUESTIONS,
    question,
  };
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser, users } = getState();

    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(saveQuestionUser(question.author, question.id, users));
    });
  };
}
export function getAllQuestions(questions) {
  return {
    type: GET_ALL_QUESTIONS,
    questions,
  };
}

function toggleQuestins(authedUser, qid, answer) {
  return {
    type: TOGGLE_QUESTIONS,
    authedUser,
    qid,
    answer,
  };
}

export function handleToggleQuestins(users, authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(toggleQuestins(authedUser, qid, answer));
    return saveQuestionAnswer(authedUser, qid, answer)
      .then(() => dispatch(saveAnswer(authedUser, qid, answer)))
      .catch((e) => {
        console.warn("Error in handleToggleQuestins: ", e);
        dispatch(toggleQuestins(authedUser, qid, answer));
        alert("There was an error vote the question. Try agian.");
      });
  };
}
