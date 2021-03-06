import React from "react";
import DeleteUserService from "../../services/DeleteUserService";
import DeleteUserModal from "../deleteUserModal/DeleteUserModal";

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
        <DeleteUserModal handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default DeleteUser;
