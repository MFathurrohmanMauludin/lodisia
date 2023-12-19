/* eslint-disable @typescript-eslint/no-explicit-any */
import { faBuilding } from "@fortawesome/free-regular-svg-icons"
import { faArrowRightFromBracket, faBriefcase, faHome, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Input, Link, Modal, ModalBody, ModalContent, ModalHeader, Tab, Tabs, useDisclosure } from "@nextui-org/react"
import { useState } from "react"

const NavigationBottom = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selected, setSelected] = useState("Login");

    return (
        <>
            <div className="w-full hidden sm:sticky md:sticky top-[100vw] sm:block md:block z-50 py-3 px-4 rounded-t-xl bg-white/60 backdrop-blur-sm border-t-1 bottom-0">
                <div className="flex justify-around items-center gapx-x-4">
                    <Button
                        href="/"
                        className="text-gray-500"
                        as={Link}
                        color="default"
                        variant="light"
                        size="md"
                        isIconOnly
                        aria-label="beranda"
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
                        aria-label="cari pekerjaan"
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
                        aria-label="mulai karir"
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
                        aria-label="cari perusahaan"
                        startContent={<FontAwesomeIcon fontSize={24} icon={faBuilding} />}
                    />
                    <Button
                        className="text-gray-500"
                        color="default"
                        variant="light"
                        size="md"
                        onPress={onOpen}
                        isIconOnly
                        aria-label="login or sign up"
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
                    <ModalHeader className="flex flex-col gap-1">{selected}</ModalHeader>
                    <ModalBody>
                        <div className="flex flex-col w-full">
                            <Tabs
                                fullWidth
                                size="md"
                                variant="solid"
                                aria-label="Tabs form"
                                selectedKey={selected}
                                onSelectionChange={(data: any) => setSelected(data)}
                            >
                                {/* login */}
                                <Tab key="Login" title="Login">
                                    <form className="flex flex-col gap-4">
                                        <Input isRequired label="Email" placeholder="Masukan email anda" type="email" />
                                        <Input
                                            isRequired
                                            label="Password"
                                            placeholder="Masukan password anda"
                                            type="password"
                                        />
                                        <p className="text-center text-small">
                                            Belum punya akun?{" "}
                                            <Link size="sm" onPress={() => setSelected("sign-up")}>
                                                Sign up
                                            </Link>
                                        </p>
                                        <div className="flex gap-2 justify-end">
                                            <Button fullWidth color="primary">
                                                Login
                                            </Button>
                                        </div>
                                    </form>
                                </Tab>

                                {/* signup */}
                                <Tab key="Sign up" title="Sign up">
                                    <form className="flex flex-col gap-4 h-[300px]">
                                        <Input isRequired label="Nama Lengkap" placeholder="Masukan nama lengkap anda" type="password" />
                                        <Input isRequired label="Email" placeholder="Masukan email anda" type="email" />
                                        <Input
                                            isRequired
                                            label="Password"
                                            placeholder="Masukan password anda"
                                            type="password"
                                        />
                                        <p className="text-center text-small">
                                            Sudah memiliki akun?{" "}
                                            <Link size="sm" onPress={() => setSelected("login")}>
                                                Login
                                            </Link>
                                        </p>
                                        <div className="flex gap-2 justify-end">
                                            <Button fullWidth color="primary">
                                                Sign up
                                            </Button>
                                        </div>
                                    </form>
                                </Tab>
                            </Tabs>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NavigationBottom