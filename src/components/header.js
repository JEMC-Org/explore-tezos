import React from "react";
import { ReactComponent as Background } from "../images/background.svg";
import beta from "../images/beta.png";

export default function Header() {
  return (
    <div className="relative sm:block">
      <Background className="relative top-0 left-0" />
    </div>
  );
}
