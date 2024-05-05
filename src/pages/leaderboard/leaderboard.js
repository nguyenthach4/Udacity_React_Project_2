import Table from "react-bootstrap/Table";
import { Image } from "react-bootstrap";
import { connect } from "react-redux";

const Leaderboard = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Users</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr key={user.id}>
            <td>
              <div className="d-flex justify-content-start flex-row">
                <Image
                  roundedCircle
                  src={user.avatarURL}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "0.5rem",
                  }}
                />

                <div>
                  <h6>{user.name}</h6>
                  <div className="text-secondary">{user.id}</div>
                </div>
              </div>
            </td>
            <td>{Object.keys(user.answers).length}</td>
            <td>{user.questions.length}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users).sort(
      (after, before) =>
        Object.keys(before.answers).length +
        before.questions.length -
        (Object.keys(after.answers).length + after.questions.length)
    ),
  };
};
export default connect(mapStateToProps)(Leaderboard);
