import { useState } from "react";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, Input, ModalFooter, useDisclosure } from "@nextui-org/react"
import { MailIcon } from "../../assets/MailIcon";
import { EyeFilledIcon } from "../../assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../assets/EyeSlashFilledIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isVisibleCreatePassword, setIsVisibleCreatePassword] = useState(false);
    const createPassword = () => setIsVisibleCreatePassword(!isVisibleCreatePassword);

    return (
        <>
            <Button onPress={onOpen} color="default" size="md" variant="bordered" radius="full">Sign up</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Sign up</ModalHeader>
                            <ModalBody>
                                {/* enter full name */}
                                <Input
                                    autoFocus
                                    endContent={
                                        <FontAwesomeIcon icon={faUser} className="text-[24px] text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Nama Lengkap"
                                    placeholder="Masukan nama lengkap anda"
                                    variant="bordered"
                                />

                                {/* enter email */}
                                <Input
                                    autoFocus
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    placeholder="Masukan email anda"
                                    variant="bordered"
                                />

                                {/* create password */}
                                <Input
                                    label="Buat Password"
                                    variant="bordered"
                                    placeholder="Masukan password"
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={createPassword}>
                                            {isVisibleCreatePassword ? (
                                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            ) : (
                                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            )}
                                        </button>
                                    }
                                    type={isVisibleCreatePassword ? "text" : "password"}
                                />
                            </ModalBody>

                            <ModalFooter>
                                <Button color="primary" variant="light" onPress={onClose} radius="full">
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose} radius="full">
                                    Create Account
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default SignUp