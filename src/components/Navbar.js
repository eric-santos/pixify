import React, { Fragment } from "react";
import { Container, Icon, Image, Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Fragment>
      <Menu fixed="top">
        <Container>
          <Menu.Item>
            <Image
              id="home"
              as="a"
              href="/"
              size="tiny"
              src="/images/home.svg"
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
    </Fragment>
  );
};
export default Navbar;
