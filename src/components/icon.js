import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon({ icon }) {
    return (
        <FontAwesomeIcon icon={icon} className="px-2 py-1 transition ease-in-out duration-300 rounded leading-snug text-center text-primary hover:text-secondary" />
    )
}