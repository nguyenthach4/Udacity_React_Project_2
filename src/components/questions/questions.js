import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { formatQuestion } from "../../utils/helpers";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Question = (props) => {
  return (
    <Card>
      <Card.Body className="d-flex flex-column justify-content-center align-item-center">
        <Card.Title className="text-center">{props.question.name}</Card.Title>
        <Card.Text className="text-center">
          {props.question.timestampFormat}
        </Card.Text>
        <Button
          style={{ width: "100px" }}
          variant="primary"
          as={Link}
          to={`/question/${props.id}`}
        >
          Reply
        </Button>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];
  return {
    authedUser,
    question: formatQuestion(
      question,
      users[question.author],
      question.optionOneText,
      question.optionTwoText
    ),
  };
};

export default connect(mapStateToProps)(Question);
