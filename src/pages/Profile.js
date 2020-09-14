import React from "react";
import { Header } from "semantic-ui-react";
import Menu from "../components/menu/Menu";
import DisplayLoggedInPicture from "../components/displayLoggedInPicture/DisplayLoggedInPicture"
import UploadProfilePicture from "../components/uploadProfilePicture/UploadProfilePicture"
import UpdateUserInfoForm from "../components/updateUserInfoForm/UpdateUserInfoForm"
import { userIsAuthenticated } from "../redux/HOCs";
import UploadProfilePictureService from "../services/UploadProfilePictureService";

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.name
    }
  }
  
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <Header as='h2'>Welcome, {this.props.name}</Header>
        <DisplayLoggedInPicture />
        <UploadProfilePicture />
        <UpdateUserInfoForm />
        <h2>Profile</h2>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
