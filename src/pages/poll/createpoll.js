import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../actions/questions/questions";
import { useNavigate } from "react-router-dom";

const NewQuestion = ({ dispatch, id }) => {
  const navigate = useNavigate();

  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleChangeOptionOne = (e) => {
    const optionOneText = e.target.value;

    setOptionOne(optionOneText);
  };

  const handleChangeOptionTwo = (e) => {
    const optionTwoText = e.target.value;

    setOptionTwo(optionTwoText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(optionOne, optionTwo));

    setOptionOne("");
    setOptionTwo("");

    if (!id) {
      navigate("/");
    }
  };

  const optionOneLeft = 280 - optionOne.length;
  const optionTwoLeft = 280 - optionTwo.length;
  return (
    <div>
      <h3 className="poli-center">Create Your Own Poll</h3>
      <Form className="poli-create" onSubmit={handleSubmit}>
        <Form.Group
          className="poli-mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Option One</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={optionOne}
            onChange={handleChangeOptionOne}
            className="poli-option-one"
            maxLength={280}
          />
        </Form.Group>
        <Form.Group
          className="poli-mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Option Two</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={optionTwo}
            onChange={handleChangeOptionTwo}
            className="poli-option-one"
            maxLength={280}
          />
        </Form.Group>
        {(optionOneLeft <= 100 || optionTwoLeft <= 100) &&
          (<div className="poli-option-one-length">{optionOneLeft}</div> || (
            <div className="poli-option-two-length">{optionTwoLeft})</div>
          ))}
        <Button
          style={{ marginTop: "0.5rem" }}
          className="poli-btn"
          type="submit"
          disabled={optionOne === "" && optionTwo === ""}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default connect()(NewQuestion);
