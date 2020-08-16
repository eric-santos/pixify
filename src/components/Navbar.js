import React from "react";
import { Container, Image, Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item>
          <Image
            id="home"
            as="a"
            href="/"
            size="mini"
            src="/images/peep-16.svg"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
export default Navbar;
