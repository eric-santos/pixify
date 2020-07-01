import React from "react";
import { Container, Icon, Image, Menu } from "semantic-ui-react";

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
        <Menu.Item id="messages-button" as="a" href="/messages">
          <Icon name="mail outline" />
          Messages
        </Menu.Item>
        {/* {authState.isAuthenticated && (
            
          )} */}
        <Menu.Item id="profile-button" as="a" href="/profile">
          Profile
        </Menu.Item>
      </Container>
    </Menu>
  );
};
export default Navbar;
