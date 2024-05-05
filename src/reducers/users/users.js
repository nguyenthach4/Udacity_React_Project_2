import {
  GET_ALL_USERS,
  SAVE_ANSWER,
  SAVE_QUESTION,
} from "../../actions/users/user";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_QUESTION: {
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: [...state[action.author].questions, action.id],
        },
      };
    }
    case SAVE_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
