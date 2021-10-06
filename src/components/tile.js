import { apps } from "../data/apps"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


export default function Tile() {
    return (
      // whole screen backgorund
      <div className="bg-white">
        {/* general background of cards */}
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* Screen reader */}
          <h2 className="sr-only">Apps</h2>
          {/* card and inbetween spaces */}
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {apps.map((app) => (
              <a key={app.id} href={app.href} className="group bg-grey-100 bg-cover bg-center p-2 rounded ring-2 ring-gray-200 shadow-md group-hover:opacity-75">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={app.imageSrc}
                    alt={app.name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-4 text-center text-gray-700">{app.name}</h3>
                <p className="mx-2 text-sm font-medium text-gray-900">{app.description}</p>

                <div class="flex space-x-4">
                  <div class="flex-auto">
                    <p className="flex-1 px-5 py-3 shadow-sm transition ease-in-out duration-300 rounded leading-snug  text-base text-center bg-blue-500 text-white hover:bg-blue-600">{<FontAwesomeIcon icon={faGlobe} />}</p>
                  </div>
                  <div class="flex-auto">
                    <p className="flex-1 px-5 py-3 shadow-sm transition ease-in-out duration-300 rounded leading-snug  text-base text-center font0semibd bg-blue-500 text-white hover:bg-blue-600">{<FontAwesomeIcon icon={faTwitter} />}</p>
                    </div>
                 </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }