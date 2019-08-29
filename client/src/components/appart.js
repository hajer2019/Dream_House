import React from "react";
import { connect } from "react-redux";

class Appart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {" "}
        <h3>Notre sélèction </h3>
        <div className="box1">
          {this.props.housefilter.map((e, i) => (
            <div className="box_item">
              <p key={i}>{e.ville}</p>
              <p>
                <img src={e.image} />
              </p>
              <p>{e.type}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    housefilter: state.reducerSearch.housefilter
  };
}

export default connect(mapStateToProps)(Appart);
