import React from "react";

const Home = () => {
  return (
    <div
      id="carouselBasicExample"
      className="carousel slide carousel-fade"
      data-mdb-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Lg1x/84f77917/globalassets/catalog-images/7/guldpalm-1st-mps-17cm-50-60cm/4a417a7b29fb61173f3fc5baa4b097512.jpg"
            className="d-block w-50"
            alt="..."
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Lg1x/9131b19c/globalassets/catalog-images/7/tempelskold-mps-12cm-25-35cm/d04f17579c3d799585b376705ac14daa.jpg"
            className="d-block w-50"
            alt="..."
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Lg1x/bfd326b3/globalassets/catalog-images/7/palettblad-alligator-alley-svenskt-sigillfran-sverige-12cm-25-35cm/e96a34943cb0b202cb9a8d8744172d72.jpg"
            className="d-block w-50"
            alt="..."
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Home;
