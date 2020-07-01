import React from "react";
import { Container, Image } from "semantic-ui-react";

const ImagePlayer = () => {
  return (
    <Container>
      <Image src="/images/dock.jpg" alt="dock" fluid centered />
      <a href="https://www.pexels.com">Photos provided by Pexels</a>
    </Container>
  );
};

export default ImagePlayer;
