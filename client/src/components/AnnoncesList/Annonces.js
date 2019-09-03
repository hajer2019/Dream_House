import React, { Component } from "react";
import { addToCart } from "../../redux/Actions/addfav";
import { getPosts } from "../../redux/Actions/postActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AnnoncesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: 6
    };
  }

  handleClick = id => {
    this.props.addToCart(id);
  };
  componentWillMount() {
    this.props.getPosts();
  }
  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 3 };
    });
  };
  render() {
    const { annonces, ville, gouvernerat, type, typebien } = this.props;

    /*const filteredAd = annonces
      .filter(el => el.ville.toLowerCase().includes(ville.toLowerCase().trim()))
      .filter(el =>
        el.gouvernerat.toLowerCase().includes(gouvernerat.toLowerCase().trim())
      )
      .filter(el => el.type.toLowerCase().includes(type.toLowerCase().trim()))
      .filter(el =>
        el.typebien.toLowerCase().includes(typebien.toLowerCase().trim())
      );*/

    return (
      <div>
        <div className="w-75 mt-4 container cards-container">
          {annonces.slice(0, this.state.visible).map(el => (
            <Link to={"/" + el._id}>
              <div key={el._id} className="card annonce-card ">
                <img
                  src={el.image}
                  className="card-img-top annonce-list-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title card-title-annonce">
                    {el.prix} TND
                  </h5>
                  <p className="card-text">
                    <i className="fas fa-map-marker-alt"></i> {el.ville}
                  </p>
                  <p className="card-text">{el.categorie}</p>
                  <p className="card-text">{el.type}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-3 mx-auto" style={{ width: "10%" }}>
          <button
            onClick={this.loadMore}
            className=" btn btn-primary load-more-button mx-auto"
          >
            Plus d'annonces
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    annonces: state.postReducer.annonces,
    gouvernerat: state.reducerSearch.gouvernerat,
    ville: state.reducerSearch.ville,
    type: state.reducerSearch.type,
    typebien: state.reducerSearch.typebien
  };
};

//const mapDispatchToProps = dispatch => {
// return {
// addToCart: id => {
// dispatch(addToCart(id));
//}
//};
//};

export default connect(
  mapStateToProps,
  { getPosts }
)(AnnoncesList);
