export const GET_ALL_USERS = "GET_ALL_USERS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function getAllUsers(users) {
  return {
    type: GET_ALL_USERS,
    users,
  };
}

export function saveQuestionUser(author, id, users) {
  return {
    type: SAVE_QUESTION,
    author,
    id,
    users,
  };
}

export function saveAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer,
  };
}
