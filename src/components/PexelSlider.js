import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = (query) =>
  `${process.env.REACT_APP_PEXELS_BASE_URL}search?query=${query}&Authorization=${process.env.REACT_APP_PEXELS_AUTHORIZATION}`;

const headers = {
  Authorization: `${process.env.REACT_APP_PEXELS_AUTHORIZATION}`,
};

const instance = axios.create({
  baseURL: baseURL("dogs"),
  headers,
});

const PexelSlider = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    instance
      .get()
      .then((response) => {
        setPhotos(response.data.photos);
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>PexelSlider</h1>
      {photos.map((p, k) => {
        return (
          <img
            src={p.src.large}
            key={k}
            alt="dogs"
            style={{ height: "40rem", width: "auto" }}
          />
        );
      })}
    </div>
  );
};

export default PexelSlider;
