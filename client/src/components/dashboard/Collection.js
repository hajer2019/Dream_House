import React from "react";
import CollectionItem from "./CollectionItem";
function Collection() {
  return (
    <div id="collection" className="mx-auto collection">
      <div className="profile-header">Collection</div>
      <div className=" collection-items mx-auto col-9 ">
        <div className=" collection-content row justify-content-around">
          <CollectionItem />
          <CollectionItem />
          <CollectionItem />
          <CollectionItem />
          <CollectionItem />
          <CollectionItem />
        </div>
      </div>
    </div>
  );
}

export default Collection;
