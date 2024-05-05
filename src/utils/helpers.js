export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatQuestion(question, author, optionOne, optionTwo) {
  const { id, text, timestamp } = question;
  const { name, avatarURL } = author;

  const timestampFormat = formatDate(timestamp);
  return {
    name,
    id,
    timestampFormat,
    text,
    avatar: avatarURL,
    optionOne: !optionOne
      ? null
      : {
          votes: !optionOne.votes ? [] : optionOne.votes,
          text: optionOne.text,
        },
    optionTwo: !optionTwo
      ? null
      : {
          votes: !optionTwo.votes ? [] : optionTwo.votes,
          text: optionTwo.text,
        },
  };
}
