import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { unSetAuthedUser } from "../../actions/users/authedUser";

const NavbarHeader = ({ dispatch }, props) => {
  console.log(props.authedUser);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(unSetAuthedUser(null));
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>
          Employee Polls
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        {props.authedUser !== null ? (
          <Navbar.Collapse id="navbarScroll">
            <Nav
              variant="underline"
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              defaultActiveKey="/home"
            >
              <Nav.Link as={Link} to={"/"}>
                {"Home"}
              </Nav.Link>

              <Nav.Link as={Link} to={"/leaderboard"}>
                {"Leaderboard"}
              </Nav.Link>

              <Nav.Link as={Link} to={"/create-poli"}>
                {"New"}
              </Nav.Link>
            </Nav>
            <Nav className="d-flex" style={{ marginRight: "1.0rem" }}>
              <NavDropdown
                title={
                  <div className="d-inline-block">
                    <Image
                      roundedCircle
                      src="/"
                      style={{
                        width: "40px",
                        height: "50px",
                        marginRight: "0.5rem",
                      }}
                    />
                    <span className="mt-5"></span>
                  </div>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        ) : (
          <nav></nav>
        )}
      </Container>
    </Navbar>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NavbarHeader);
