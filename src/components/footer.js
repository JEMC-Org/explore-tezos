import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <p>Have an app not listed?</p>
        <p>Join our discord and suggest it.</p>
      </div>
      <div className="w-full h-20 flex justify-center items-center text-2xl">
        <a
          className="px-2 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary"
          href="https://twitter.com/exploretezos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className="px-2 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary"
          href="https://discord.gg/fXsVvsxCr3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </div>
      <div>
        <p className="w-full h-10 flex justify-center text-sm text-descriptions">
          Copyright © 2021 JEMC. All Rights Reserved. Made with &nbsp;{" "}
          <span className="text-red">&#9829;</span>
        </p>
      </div>
    </div>
  );
}
