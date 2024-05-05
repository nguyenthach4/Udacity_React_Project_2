import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function getUsers() {
  return _getUsers;
}

export function getQuestions() {
  return _getQuestions();
}

export function saveQuestion(info) {
  return _saveQuestion(info);
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}
