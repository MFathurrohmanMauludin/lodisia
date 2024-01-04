import { FacebookShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from "react-share"
import { faFacebook, faTelegram, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ShareFacebook = () => {

    return (
        <>
            <FacebookShareButton
                url={"https://lodisa.netlify.app/"}
                hashtag="#Lodisia"
            >
                <button aria-label="bagikan ke facebook">
                    <FontAwesomeIcon className="text-blue-700" fontSize={28} icon={faFacebook} />
                </button>
            </FacebookShareButton>
        </>
    )
}

const ShareXTwitter = () => {
    return (
        <TwitterShareButton
            url={"https://lodisa.netlify.app/"}
            hashtags={['lodisia', 'loker_indonesia']}
        >
            <button aria-label="bagikan ke twitter">
                <FontAwesomeIcon className="text-gray-800" fontSize={28} icon={faXTwitter} />
            </button>
        </TwitterShareButton>
    )
}

const ShareWhatsapp = () => {
    return (
        <WhatsappShareButton
            url={"https://lodisa.netlify.app/"}
        >
            <button aria-label="bagikan ke whatsapp">
                <FontAwesomeIcon className="text-green-500" fontSize={28} icon={faWhatsapp} />
            </button>
        </WhatsappShareButton>
    )
}


const ShareTelegram = () => {
    return (
        <TelegramShareButton
            url={"https://lodisa.netlify.app/"}
        >
            <button aria-label="bagikan ke telegram">
                <FontAwesomeIcon className="text-blue-500" fontSize={28} icon={faTelegram} />
            </button>
        </TelegramShareButton>
    )
}


export { ShareFacebook, ShareXTwitter, ShareWhatsapp, ShareTelegram }