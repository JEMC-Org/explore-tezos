import React from "react";
import { ReactComponent as Background } from "../images/background.svg";
import beta from "../images/beta.png";

export default function Header() {
  return (
    <div className="relative sm:block">
      <Background className="relative top-0 left-0" />
      <img
        src={beta}
        alt="beta"
        className="absolute top-0 right-0 w-10 h-10 sm:w-20 sm:h-20"
      />
    </div>
  );
}
