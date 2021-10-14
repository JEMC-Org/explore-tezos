import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import {
  faTwitter,
  faReddit,
  faTelegram,
  faDiscord,
  faGithub,
  faLinkedin,
  faYoutube,
  faMedium,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";

export default function Tile({ app }) {
  return (
    <div className="w-full h-auto mx-h-10">
      <a href={app.href} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center rounded-lg h-20">
          <img src={app.imageSrc} alt={app.name} className="bg-white" />
        </div>
        <div className="m-1 pt-2 pb-10">
          <h3 className="text-titles">{app.name}</h3>
          <p className="text-sm text-descriptions pt-3">{app.description}</p>
        </div>
      </a>
      <div className="absolute bottom-0 left-0 flex flex-row p-2">
        {app.href ? (
          <a
            className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary"
            href={app.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FontAwesomeIcon icon={faGlobe} />}
          </a>
        ) : null}
        {app.twitterUrl ? (
          <a
            className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary"
            href={app.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FontAwesomeIcon icon={faTwitter} />}
          </a>
        ) : null}
        {app.redditUrl ? (
          <a
            className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary"
            href={app.redditUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FontAwesomeIcon icon={faReddit} />}
          </a>
        ) : null}
        {app.telegramUrl ? (
          <a
            className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary"
            href={app.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FontAwesomeIcon icon={faTelegram} />}
          </a>
        ) : null}
        {app.discordUrl ? (
          <a
            className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary"
            href={app.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FontAwesomeIcon icon={faDiscord} />}
          </a>
        ) : null}
        {app.githubUrl ? (
          <a
            className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary"
            href={app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FontAwesomeIcon icon={faGithub} />}
          </a>
        ) : null}
        {app.gitlabUrl ? (
          <a
            className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary"
            href={app.gitlabUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FontAwesomeIcon icon={faGitlab} />}
          </a>
        ) : null}
        {app.linkedinUrl ? (
          <a
            className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary"
            href={app.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FontAwesomeIcon icon={faLinkedin} />}
          </a>
        ) : null}
        {app.youtubeUrl ? (
          <a
            className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary"
            href={app.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FontAwesomeIcon icon={faYoutube} />}
          </a>
        ) : null}
        {app.mediumUrl ? (
          <a
            className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary"
            href={app.mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FontAwesomeIcon icon={faMedium} />}
          </a>
        ) : null}
      </div>
    </div>
  );
}

Tile.propTypes = {
  app: PropTypes.object.isRequired,
};
