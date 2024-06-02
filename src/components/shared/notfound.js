import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <h2>404 Not Found</h2>
        <Link to="/">Back to Home</Link>
      </Row>
    </Container>
  );
};

export default NotFound;
