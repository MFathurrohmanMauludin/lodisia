import { useState } from "react";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, Input, ModalFooter, useDisclosure } from "@nextui-org/react"
import { MailIcon } from "../../assets/MailIcon";
import { EyeFilledIcon } from "../../assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../assets/EyeSlashFilledIcon";

const SignUp = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isVisibleCreatePassword, setIsVisibleCreatePassword] = useState(false);
    const [isVisibleReEnterPassword, setIsVisibleReEnterPassword] = useState(false);

    const createPassword = () => setIsVisibleCreatePassword(!isVisibleCreatePassword);
    const reEnterPassword = () => setIsVisibleReEnterPassword(!isVisibleReEnterPassword);

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
                                <Input
                                    autoFocus
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                />

                                {/* create password */}
                                <Input
                                    label="Create Password"
                                    variant="bordered"
                                    placeholder="Masukkan password"
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

                                {/* re-enter password */}
                                <Input
                                    label="Re-enter Password"
                                    variant="bordered"
                                    placeholder="Re-enter your password"
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={reEnterPassword}>
                                            {isVisibleReEnterPassword ? (
                                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            ) : (
                                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            )}
                                        </button>
                                    }
                                    type={isVisibleReEnterPassword ? "text" : "password"}
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