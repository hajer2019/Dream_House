import React from 'react'

function Profile() {
    return (
        <div id="profile">
        <div className="profile-header">
          Profile
        </div>
        <div className=" profile-content row justify-content-around">
            <div className="col-4">
            <div className=" profile-info card">
                <img className="rounded-circle  w-50 mx-auto" src="https://assets3.thrillist.com/v1/image/2812274/size/gn-gift_guide_variable_c.jpg" alt="Card image cap"/>
                <h5 className="h3 mt-3 ml-3 ">User</h5> 
                <h5 className="h3 mt-3 ml-3">Email</h5>
                <h4 className="mt-3 ml-3"><i className="fas fa-map-marker-alt"></i></h4>   
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
                            <input type="text" className="form-control" placeholder="Nom ..."/>
                        </div>
                        </div>
                        <div className="col-md-6 pl-1">
                        <div className="form-group">
                            <label>Prenom</label>
                            <input type="text" className="form-control" placeholder="Prenom .." />
                        </div>
                        </div>
                    </div>
                  <div className="row">
                    <div className="col-md-8 pr-1">
                      <div className="form-group">
                        <label for="exampleInputEmail1">Email </label>
                        <input type="email" className="form-control" placeholder="Email"/>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-8 pr-1">
                      <div className="form-group">
                        <label>Adresse</label>
                        <input type="text" className="form-control" placeholder="Rue/Route" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-7 pr-1">
                      <div className="form-group">
                        <label>Ville</label>
                        <input type="text" className="form-control" placeholder="Ville .."/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control textarea" placeholder="Ajouter une description ..."></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="update ml-auto mr-auto">
                      <button type="submit" className="btn btn-primary btn-round">Update Profile</button>
                    </div>
                  </div>
                </form>
           
        </div>
      </div>
      </div>
    )
}

export default Profile
