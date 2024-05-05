import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Question from "../../components/questions/questions";

const Dashboard = (props) => {
  return (
    <Tabs
      defaultActiveKey="new-question"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="new-question" title="New Question">
        <Row>
          {props.newQuestionsIds.map((id) => (
            <Col
              key={id}
              md={4}
              className="question-item"
              style={{ marginBottom: "0.5rem" }}
            >
              <Question id={id}></Question>
            </Col>
          ))}
        </Row>
      </Tab>
      <Tab eventKey="done-question" title="Done Question">
        <Row>
          {props.doneQuestionsIds.map((id) => (
            <Col
              key={id}
              md={4}
              className="question-item"
              style={{ marginBottom: "0.5rem" }}
            >
              <Question id={id}></Question>
            </Col>
          ))}
        </Row>
      </Tab>
    </Tabs>
  );
};

const mapStateToProps = ({ questions, users, authedUser }) => {
  const userLoginInfo = users[authedUser];
  let answer = [];
  if (userLoginInfo) {
    answer = Object.keys(userLoginInfo.answers);
  }

  return {
    newQuestionsIds: Object.keys(questions)
      .filter((question) => !answer.includes(question))
      .sort(
        (after, before) =>
          questions[before].timestamp - questions[after].timestamp
      ),
    doneQuestionsIds: Object.keys(questions)
      .filter((question) => answer.includes(question))
      .sort(
        (after, before) =>
          questions[before].timestamp - questions[after].timestamp
      ),
  };
};

export default connect(mapStateToProps)(Dashboard);
