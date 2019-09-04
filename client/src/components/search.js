
import React from "react";
import { connect } from "react-redux";
import { search } from "../redux/Actions/actionSearch";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ville: "",
      gouvernerat: "",
      categorie: "",
      typebien: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.search(this.state);
  };
  render() {
    const { search, value } = this.props;
    return (
      <div>
        <section class="search-form">
          <div>
            <h3 className="search-heading">
              <i className="fa fa-search"></i>Recherche Rapide
            </h3>
          </div>
          <form name="search" role="search">
            <div className="inp-wrap search-wrap">
              <select
                style={{ width: "200px" }}
                name="gouvernerat"
                id="gouvernerat"
                className="grid-80"
                onChange={this.handleChange}
              >
                <option value={this.state.gouvernorat} selected>
                  Choisir un gouvernorat
                </option>
                <option value="Ben Arous"> Tunis </option>
                <option value="Ben Arous"> Ben Arous </option>
                <option value="Mannouba"> Mannouba </option>
                <option value="Nabeul"> Nabeul </option>
                <option value="Ariana"> Ariana </option>
              </select>
            </div>
            <div className="inp-wrap cat-wrap">
              <input
                style={{ width: "200px" }}
                type="text"
                name="ville"
                value={this.state.ville}
                onChange={this.handleChange}
                id="ville"

                class="grid-80"
                placeholder="Saisir votre ville"

                className="grid-80"
                placeholder="saisir votre ville"

              />
            </div>

            <div className="inp-wrap cat-wrap">
              <select
                style={{ width: "200px" }}

                name="categorie"
                id="categorie"
                class="grid-80"

                name="type"
                id="type"
                className="grid-80"

                onChange={this.handleChange}
              >
                <option value={this.state.categorie} selected>
                  Categorie
                </option>
                <option value="Louer"> Louer </option>
                <option value="Vendre"> Vendre </option>
                <option value="Acheter"> Acheter </option>
              </select>
            </div>

            <div className="inp-wrap cat-wrap">
              <select
                onChange={this.handleChange}
                name="typebien"
                id="typebien"
                className="grid-80"
                style={{ width: "200px" }}
              >
                <option value="Appartement"> Type de bien </option>
                <option value="Appartement"> Appartement </option>
                <option value="Bureau "> Bureau </option>
                <option value="Villa "> Villa </option>
                <option value="Maison"> Maison </option>
                <option value="Commercial"> Commercial </option>
                <option value="Duplex"> Duplex </option>
                <option value="Immeuble"> Immeuble </option>
              </select>
            </div>

            <div className="inp-wrap submit-wrap">
              <button
                onClick={e => {
                  this.onSubmit(e);
                }}
                value={value}
                className="grid-100 btn"
                style={{
                  marginTop: "-8px",
                  backgroundColor: "#fff",
                  color: "#000000",
                  marginRight: "0",
                  marginLeft: "9px"
                }}
              >
                Search
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   house: state.reducerSearch.house
// });

// const mapDispatchToProps = dispatch => ({
//   // return bindActionCreators({ search }, dispatch);
//   search: searchValue => dispatch(search(searchValue))
// });

export default connect(
  null,
  { search }
)(Search);

