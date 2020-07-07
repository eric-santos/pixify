import React from "react";
import { Container } from "semantic-ui-react";

import ImagePlayer from "../components/ImagePlayer.js";
import PexelSlider from "./PexelSlider.js";

const Home = () => {
  return (
    <Container>
      <ImagePlayer />
      <PexelSlider />
    </Container>
  );
};

export default Home;
