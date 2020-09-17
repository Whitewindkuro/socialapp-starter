import React from "react";
import DeleteUserService from "../../services/DeleteUserService";

class DeleteUser extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DeleteUserService();
  }

  handleDelete = (e) => {
    this.client.deleteUser().then((result) => {
      console.log(result);
      localStorage.clear();
      window.location.reload();
    });
  };

  render() {
    return (
      <div>
        <button className="delete-username" onClick={this.handleDelete}>
          Delete
        </button>
      </div>
    );
  }
}

export default DeleteUser;