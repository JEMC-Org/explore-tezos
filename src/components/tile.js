import { apps } from "../data/apps"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faReddit, faTelegram, faDiscord, faGithub, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'


export default function Tile() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Apps</h2>
          <h2>Defi</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {apps.map((app) => (
              <div key={app.id} className="relative group bg-grey-100 bg-cover bg-center p-2 rounded ring-2 ring-gray-200 shadow-md group-hover:opacity-75 ">
                  <a href={app.href}> 
                <div className="flex justify-center w-full rounded-lg overflow-hidden ">
                  <img
                    src={app.imageSrc}
                    alt={app.name}
                    className="bg-white"
                  />
                </div>
                <div className="m-1 py-5">
                  <h3 className="text-titles">{app.name}</h3>
                  <p className="text-sm text-descriptions pt-3">{app.description}</p>
                </div>
                </a>
                <div class="absolute bottom-0 left-0 flex flex-row p-2">
                  { app.href ? <a className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary" href={app.href} target="_blank" rel="noopener noreferrer">{<FontAwesomeIcon icon={faGlobe} />}</a> : null }
                  { app.twitterUrl ? <a className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary" href={app.twitterUrl} target="_blank" rel="noopener noreferrer">{<FontAwesomeIcon icon={faTwitter} />}</a> : null }
                  { app.redditUrl ? <a className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary" href={app.redditUrl} target="_blank" rel="noopener noreferrer">{<FontAwesomeIcon icon={faReddit} />}</a> : null }
                  { app.telegramUrl ? <a className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary" href={app.telegramUrl} target="_blank" rel="noopener noreferrer">{<FontAwesomeIcon icon={faTelegram} />}</a> : null }
                  { app.discordUrl ? <a className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary" href={app.discordUrl} target="_blank" rel="noopener noreferrer">{<FontAwesomeIcon icon={faDiscord} />}</a> : null }
                  { app.githubUrl ? <a className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary" href={app.githubUrl} target="_blank" rel="noopener noreferrer">{<FontAwesomeIcon icon={faGithub} />}</a> : null }
                  { app.linkedinUrl ? <a className=" px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary" href={app.linkedinUrl} target="_blank" rel="noopener noreferrer">{<FontAwesomeIcon icon={faLinkedin} />}</a> : null }
                </div>
              </div>
            ))}
          </div>
          <h2>Wallets</h2>
        </div>
      </div>
    )
  }