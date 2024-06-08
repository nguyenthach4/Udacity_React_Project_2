import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleToggleQuestins } from "../../actions/questions/questions";
import NotFound from "../../components/shared/notfound";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const Poll = (props) => {
  const handleVote = (e, as) => {
    e.preventDefault();

    let answer = "";
    switch (as) {
      case "1":
        answer = "optionOne";
        break;
      case "2":
        answer = "optionTwo";
        break;
      default:
        break;
    }
    const { dispatch, id, authedUser } = props;

    dispatch(handleToggleQuestins(props.users, authedUser, id, answer));
  };
  return props.id !== null ? (
    <Row style={{ background: "#eee" }}>
      <Col md={4} className="my-4">
        <Card>
          <Card.Img
            variant="top"
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            style={{ width: "200px", height: "200px" }}
          />
          <Card.Body>
            <Card.Title className="text-center">{props.author}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md={8} className="border">
        <h4 className="text-center my-4">Would You Rather</h4>
        <Row style={{ paddingBottom: "0.5rem" }}>
          <Card className="text-center">
            <Card.Header>Option One</Card.Header>
            {props.voted ? (
              <ul>
                <li>Vote rate: {props.voteOptionOne} %</li>
                <li>
                  {props.voteOptionTwo} out of {props.voteOptionOne + props.voteOptionTwo} votes

                  {props.answers === "optionOne" && (
                    <Badge bg="info">{"Your vote"}</Badge>
                  )}
                </li>
              </ul>
            ) : (
              <Card.Body>
                <Card.Text>{props.optionOneText.text}</Card.Text>
                <Button variant="primary" onClick={(e) => handleVote(e, "1")}>
                  Vote
                </Button>
              </Card.Body>
            )}
          </Card>
        </Row>
        <Row style={{ paddingBottom: "0.5rem" }}>
          <Card className="text-center">
            <Card.Header>Option Two</Card.Header>
            {props.voted ? (
              <ul>
                <li>Vote rate: {props.voteOptionTwo} %</li>
                <li>
                  {props.voteOptionTwo} out of {props.voteOptionOne + props.voteOptionTwo} votes

                  {props.answers === "optionTwo" && (
                    <Badge bg="info">{"Your vote"}</Badge>
                  )}
                </li>
              </ul>
            ) : (
              <Card.Body>
                <Card.Text>{props.optionTwoText.text}</Card.Text>
                <Button variant="primary" onClick={(e) => handleVote(e, "2")}>
                  Vote
                </Button>
              </Card.Body>
            )}
          </Card>
        </Row>
      </Col>
    </Row>
  ) : (
    <NotFound></NotFound>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  if (authedUser === null) {
    return { id: null };
  }
  const { id } = props.router.params;
  const voted = id in users[authedUser]?.answers;
  let optionOne =
    questions[id].optionOne === null ? 0 : questions[id].optionOne.votes.length;

  let optionTwo =
    questions[id].optionTwo === null ? 0 : questions[id].optionTwo.votes.length;

  const coutOptionOne = (optionOne / (optionOne = optionTwo)) * 100;
  const coutOptionTwo = (optionTwo / (optionOne = optionTwo)) * 100;
  return {
    id,
    users,
    voted,
    author: questions[id].author,
    authedUser: authedUser,
    optionOneText: questions[id].optionOne,
    optionTwoText: questions[id].optionTwo,
    answers: users[authedUser].answers[id],
    voteOptionOne: coutOptionOne,
    voteOptionTwo: coutOptionTwo,
  };
};
export default withRouter(connect(mapStateToProps)(Poll));
