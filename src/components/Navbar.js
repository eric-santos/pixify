import React, { Suspense } from "react";
import { Container, Icon, Image, Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
          <Menu.Item id="messages-button" as="a" href="/messages">
            <Icon name="mail outline" />
            Messages
          </Menu.Item>
          <Menu.Item id="profile-button" as="a" href="/profile">
            Profile
          </Menu.Item>
        </Container>
      </Menu>
    </Suspense>
  );
};
export default Navbar;
