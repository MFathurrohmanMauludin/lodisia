import { Button, Modal, ModalContent, ModalHeader, ModalBody, Input, Checkbox, ModalFooter, useDisclosure, Link } from "@nextui-org/react"
import { MailIcon } from "../../assets/MailIcon";
import { LockIcon } from "../../assets/LockIcon";
import { useState } from "react";

const Login = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [mail, setMail] = useState("");
    const regExp = RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');

    return (
        <>
            <Button onPress={onOpen} color="default" size="md" variant="light" radius="full">Log in</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    placeholder="Masukan E-Mail"
                                    variant="bordered"
                                    isInvalid={!regExp.test(mail)}
                                    onValueChange={setMail}
                                    errorMessage={!regExp.test(mail) ? "Mohon masukan alamat email yang valid" : ""}
                                />
                                <Input
                                    endContent={
                                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Password"
                                    placeholder="Masukan kata sandi"
                                    type="password"
                                    variant="bordered"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Lupa password?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" variant="light" onPress={onClose} radius="full">
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose} radius="full">
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default Login