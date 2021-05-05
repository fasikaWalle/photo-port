import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

import PhotoList from "../../components/PhotoList";
function Gallery({ currentCatagory }) {
  console.log(currentCatagory);
  const { name, description } = currentCatagory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCatagory.name} />
    </section>
  );
}

export default Gallery;
