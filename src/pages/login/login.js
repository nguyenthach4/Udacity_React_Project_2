import { connect, useSelector } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { setAuthedUser } from "../../actions/users/authedUser";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";

const Login = ({ dispatch }) => {
  const userLst = useSelector((state) => state.users);
  const navigate = useNavigate();
  const { state } = useLocation();

  const [user, setUser] = useState("");

  const handleChangeUser = (e) => {
    const userText = e.target.value;

    setUser(userText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(user));
    navigate(state?.path);
  };

  return (
    <Container >
      <Form.Select
        aria-label="Default select example"
        onChange={handleChangeUser}
        value={user}
        data-testid="test-user-select"
      >
        <option>Select User</option>
        {Object.values(userLst).map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </Form.Select>
      <Button
        disabled={!user}
        variant="primary"
        type="button"
        data-testid="test-submit"
        onClick={handleSubmit}
      >
        {"Submit"}
      </Button>
    </Container>
  );
};

// function RequireAuth({ children }) {
//   const { authed } = useAuth();
//   const location = useLocation();

//   return authed === true ? (
//     children
//   ) : (
//     <Navigate to="/login" replace state={{ path: location.pathname }} />
//   );
// }

export default connect()(Login);
