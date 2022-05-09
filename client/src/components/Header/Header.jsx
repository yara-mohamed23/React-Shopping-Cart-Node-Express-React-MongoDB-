import React from "react";
import "../../css/Header/Header.css";
import {words} from "../../staticFile"
function Header() {
  return(
  <header>
    {words.headerTitle}
  </header>
  )
}

export default Header;
