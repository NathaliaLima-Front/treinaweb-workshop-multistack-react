import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Toolbar, Container } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src={"/img/logos/logo.svg"} alt={"e-diaristas"} />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;

/*
    * É possível renderizar um elemento com outro elemento, por exemplo:
        No caso do Toolbar, podemos passar a propriedade component={Container}
*/
