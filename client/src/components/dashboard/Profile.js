import React from "react";
import { connect } from "react-redux";
import user from "../../layouts/user.jpg";

function Profile(props) {
  return (
    <div id="profile">
      <div className="profile-header">Profile</div>
      <div className=" profile-content row justify-content-around">
        <div className="col-4">
          <div className=" text-center profile-info card pt-3 pb-3">
            <img className="mx-auto profile-img" src={user} alt="user"></img>
            <h5 className="h3 mt-3 ml-3 ">{props.user.name}</h5>
            <h5 className="h3 mt-3 ml-3">{props.user.email}</h5>
          </div>
        </div>
        <div className=" card p-2 col-8">
          <div className="profile-header">
            <h5>Edit Profile</h5>
          </div>
          <form className="userupdate">
            <div className="row">
              <div className="col-md-6 pr-1">
                <div className="form-group">
                  <label>Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nom ..."
                  />
                </div>
              </div>
              <div className="col-md-6 pl-1">
                <div className="form-group">
                  <label>Prenom</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Prenom .."
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 pr-1">
                <div className="form-group">
                  <label for="exampleInputEmail1">Email </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 pr-1">
                <div className="form-group">
                  <label>Adresse</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Rue/Route"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 pr-1">
                <div className="form-group">
                  <label>Ville</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ville .."
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control textarea"
                    placeholder="Ajouter une description ..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="update ml-auto mr-auto">
                <button type="submit" className="btn btn-primary btn-round">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps)(Profile);
