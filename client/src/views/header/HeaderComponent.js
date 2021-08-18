import React from "react";
import { Header, NavToggle } from "tailwind-react-ui";
import Navigation from "./components/Navigation";

function HeaderComponent() {
  return (
    <Header>
      <NavToggle />
      <Navigation />
    </Header>
  );
}

export default HeaderComponent;
