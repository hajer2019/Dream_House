import React from "react";
import { connect } from "react-redux";
import { search } from "../redux/Actions/actionSearch";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      house: this.props.house,
      villes: "",
      gouvernerat: "",
      services: "",
      TypeBiens: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const annoInfo = {
      gouvernerat: this.state.gouvernerat,
      villes: this.state.villes,
      services: this.state.services,
      TypeBiens: this.state.TypeBiens
    };

    console.log("before search", this.state.house);

    this.setState(
      {
        house: this.state.house.filter((e, i) => e.ville === annoInfo.villes)
      },
      () => (
        console.log("after search", this.state.house),
        console.log("parametre", annoInfo.villes)
      )
    );
  };
  render() {
    const { search, value, house } = this.props;
    return (
      <div>
        <section class="search-form">
          <div>
            {" "}
            <h3 className="search-heading">
              <i className="fa fa-search"></i>Recherche Rapide
            </h3>
          </div>
          <form action="" method="GET" name="search" role="search">
            <div className="inp-wrap search-wrap">
              <select
                style={{ width: "200px" }}
                name="gouvernerat"
                id="gouvernerat"
                class="grid-80"
                onChange={this.onChange}
              >
                <option value="Tunis" selected>
                  {" "}
                  Choisir un gouvernerat
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
                name="villes"
                value={this.state.villes}
                onChange={this.onChange}
                id="villes"
                class="grid-80"
                placeholder="saisir votre ville"
              />
            </div>

            <div className="inp-wrap cat-wrap">
              <select
                style={{ width: "200px" }}
                name="services"
                id="services"
                class="grid-80"
                onChange={this.onChange}
              >
                <option value="Type" selected>
                  {" "}
                  Type{" "}
                </option>
                <option value="Louer"> Louer </option>
                <option value="Vendre"> Vendre </option>
                <option value="Acheter"> Acheter </option>
              </select>
            </div>

            <div className="inp-wrap cat-wrap">
              <select
                name="TypeBiens"
                id="TypeBiens"
                class="grid-80"
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
                class="grid-100 btn"
                style={{
                  marginTop: "0px",
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

const mapStateToProps = state => ({
  house: state.reducerSearch.house
});

const mapDispatchToProps = dispatch => ({
  // return bindActionCreators({ search }, dispatch);
  search: searchValue => dispatch(search(searchValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
