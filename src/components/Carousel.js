import React from "react";
import Carousel from "react-elastic-carousel";
import { Item } from "semantic-ui-react";

const CarouselPlayer = () => {
  return (
    <Carousel
      autoPlaySpeed="5000"
      enableAutoPlay="true"
      itemsToShow={1}
      style={{ display: "flex", justifyContent: "center", margin: "7rem 0" }}
    >
      <img
        src="/images/close-up.jpg"
        alt="woman close up"
        style={{ height: "auto", width: "100%" }}
      />
      <img
        src="/images/dock.jpg"
        alt="dock"
        style={{ height: "auto", width: "100%" }}
      />
      <img
        src="/images/woman.jpg"
        alt="woman"
        style={{ height: "auto", width: "100%" }}
      />
      <Item>4</Item>
      <Item>5</Item>
      <Item>6</Item>
    </Carousel>
  );
};

export default CarouselPlayer;
