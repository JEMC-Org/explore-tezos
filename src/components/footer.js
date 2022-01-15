import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-descriptions">
        <p>Have an app not listed?</p>
        <p>Join our discord and suggest it.</p>
      </div>
      <div className="w-full h-20 flex justify-center items-center text-2xl">
        <a
          className="px-2 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-white"
          href="https://twitter.com/exploretezos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className="px-2 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-white"
          href="https://discord.gg/fXsVvsxCr3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a
          className="px-2 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-white"
          href="https://jemc.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMap} />
        </a>
        <a
          className="px-2 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-white"
          href="https://github.com/JEMC-Org/explore-tezos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="flex pb-4 flex-col items-center justify-center text-descriptions text-center">
        <a href="https://tzkt.io/tz1g1kNmzUmWnmxmtWbjtkMW4feSYmqAyjpR/operations/">
          Donation: tz1g1kNmzUmWnmxmtWbjtkMW4feSYmqAyjpR or whatis.tez{" "}
        </a>
      </div>
      <div>
        <p className="w-full h-10 flex justify-center text-xs text-descriptions">
          Copyright © 2022&nbsp;<a href="https://jemc.xyz"> JEMC </a>. All
          Rights Reserved. Made with &nbsp;{" "}
          <span className="text-red">&#9829;</span>
        </p>
      </div>
    </div>
  );
}
