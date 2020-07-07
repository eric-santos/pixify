import React, { useState, useEffect } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.pexels.com/v1/search?query=people",
  timeout: 1000,
  headers: { Authorization: `${process.env.REACT_APP_API_KEY}` },
});

const PexelSlider = () => {
  // const [photos, setPhotos] = useState();

  useEffect(() => {
    instance
      .get()
      .then((response) => console.log(response))

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>PexelSlider</h1>
    </div>
  );
};

export default PexelSlider;
