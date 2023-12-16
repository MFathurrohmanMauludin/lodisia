import { Link } from "react-router-dom"
import { Button } from "@nextui-org/react"
import { faEye } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LookMoreButton = () => {
    return (
        <>
            <Button
                href="#"
                as={Link}
                variant="light"
                color="default"
                radius="full"
                startContent={<FontAwesomeIcon icon={faEye}
                    aria-label="icon mata" />}
                aria-label="lihat semua lowongan tersedia">
                Lihat Semua Lowongan
            </Button>
        </>
    )
}

export default LookMoreButton