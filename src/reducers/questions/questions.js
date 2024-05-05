import {
  GET_ALL_QUESTIONS,
  ADD_QUESTIONS,
  TOGGLE_QUESTIONS,
} from "../../actions/questions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_ALL_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTIONS:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case TOGGLE_QUESTIONS:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    default:
      return state;
  }
}
