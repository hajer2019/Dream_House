import React from "react";
import { house } from "../data";
function Appart() {
  return (
    <div>
      {" "}
      <h3>Notre sélèction </h3>
      <div className="box1">
        {house.map((e, i) => (
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

export default Appart;
