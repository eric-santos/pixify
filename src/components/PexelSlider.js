import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "semantic-ui-react";
import Carousel from "react-elastic-carousel";

const baseURL = (query) =>
  `${process.env.REACT_APP_PEXELS_BASE_URL}search?query=${query}&per_page=80&Authorization=${process.env.REACT_APP_PEXELS_AUTHORIZATION}`;

const headers = {
  Authorization: `${process.env.REACT_APP_PEXELS_AUTHORIZATION}`,
};

const instance = axios.create({
  baseURL: baseURL("nature"),
  headers,
});

const PexelSlider = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    instance
      .get()
      .then((response) => {
        console.log(response.data);
        setPhotos(response.data.photos);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Carousel
        itemsToShow={1}
        disableArrowsOnEnd={true}
        enableSwipe={true}
        autoPlaySpeed={25000}
        enableAutoPlay={true}
        showArrows={false}
      >
        {photos.map((p, k, i) => {
          return (
            <div key={k}>
              <Image
                style={{ height: "100vh", width: "auto" }}
                src={p.src.original}
                key={i}
                alt="nature"
              />
              <a href={p.photographer_url} alt="photographer">
                <h1 style={{ color: "#08d9d6" }}>
                  Photographer: {p.photographer}
                </h1>
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default PexelSlider;
