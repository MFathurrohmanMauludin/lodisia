import { faBuilding } from "@fortawesome/free-regular-svg-icons"
import { faArrowRightFromBracket, faBriefcase, faHome, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Link, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react"
import LoginSignupForm from "../form"

const NavigationBottom = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <div className="w-full hidden sm:fixed sm:block md:block md:fixed z-40 py-3 px-4 rounded-t-xl bg-white/60 backdrop-blur-sm border-t-1 bottom-0">
                <div className="flex justify-around items-center gapx-x-4">
                    <Button
                        href="/"
                        className="text-gray-500"
                        as={Link}
                        color="default"
                        variant="light"
                        size="md"
                        isIconOnly
                        startContent={<FontAwesomeIcon fontSize={24} icon={faHome} />}
                    />
                    <Button
                        href="/cari-pekerjaan"
                        className="text-gray-500"
                        as={Link}
                        color="default"
                        variant="light"
                        size="md"
                        isIconOnly
                        startContent={<FontAwesomeIcon fontSize={24} icon={faSearch} />}
                    />
                    <Button
                        href="/memulai-karir"
                        className="text-gray-500"
                        as={Link}
                        color="default"
                        variant="light"
                        size="md"
                        isIconOnly
                        startContent={<FontAwesomeIcon fontSize={24} icon={faBriefcase} />}
                    />
                    <Button
                        href="/daftar-perusahaan"
                        className="text-gray-500"
                        as={Link}
                        color="default"
                        variant="light"
                        size="md"
                        isIconOnly
                        startContent={<FontAwesomeIcon fontSize={24} icon={faBuilding} />}
                    />
                    <Button
                        className="text-gray-500"
                        color="default"
                        variant="light"
                        size="md"
                        onPress={onOpen}
                        isIconOnly
                        startContent={<FontAwesomeIcon fontSize={24} icon={faArrowRightFromBracket} />}
                    />
                </div>
            </div>

            <Modal
                // className="fixed bottom-0 !m-0 rounded-b-none"
                isOpen={isOpen}
                placement="center"
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody>
                        <LoginSignupForm />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NavigationBottom