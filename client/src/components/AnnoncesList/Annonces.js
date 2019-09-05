import React, { Component } from "react";
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
  // componentWillMount(){
  //   this.props.getPosts();
  // }

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 3 };
    });
  };
  render() {
    const { annonces, ville, gouvernerat, categorie, typebien } = this.props;

    const x = annonces.filter(e => {
      return (
        e.ville.toLowerCase().includes(ville.toLowerCase().trim()) &&
        e.gouvernerat
          .toLowerCase()
          .includes(gouvernerat.toLowerCase().trim()) &&
        e.categorie.toLowerCase().includes(categorie.toLowerCase().trim()) &&
        e.typebien.toLowerCase().includes(typebien.toLowerCase().trim())
      );
    });

    return (
      <div>
        <div className="w-75 mt-4 container cards-container">
          {x.slice(0, this.state.visible).map(el => (
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
                  <p class="card-text">{el.categorie}</p>
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
    categorie: state.reducerSearch.categorie,
    typebien: state.reducerSearch.typebien
  };
};

export default connect(
  mapStateToProps,
  { getPosts }
)(AnnoncesList);
