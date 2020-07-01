import React from "react";
import { Container, Image, Divider } from "semantic-ui-react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import CustomDotGroup from "./CustomDotGroup";

const ImagePlayer = () => {
  return (
    <Container style={{ marginTop: "75px" }}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={60}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <Image src="/images/dock.jpg" alt="dock" fluid centered />
            <a href="https://www.pexels.com">Photos provided by Pexels</a>
          </Slide>
          <Slide index={1}>
            <Image src="/images/woman.jpg" alt="dock" fluid centered />
          </Slide>
          <Slide index={2}>
            <Image src="/images/close-up.jpg" alt="dock" fluid centered />
          </Slide>
        </Slider>
        <Divider />
        <CustomDotGroup slides={3} />
      </CarouselProvider>
    </Container>
  );
};

export default ImagePlayer;
