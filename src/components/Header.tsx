import React from "react";
import { Logo, AvatarCircle } from "../components/icons";

const Header: React.FC = () => {
  return (
    <header style={{
      flexShrink: 0,
      height: 70,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingInline: 30,
      background: "transparent",
    }}>
      <Logo />
      <AvatarCircle />
    </header>
  );
};

export default Header;
