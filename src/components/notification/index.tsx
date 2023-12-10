import { faBell } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Notification = () => {
    return (
        <div className="text-[24px] text-gray-400 hover:text-gray-700">
            <FontAwesomeIcon icon={faBell} />
        </div>
    )
}

export default Notification