import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem } from "@nextui-org/react"

interface Props {
    open: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

const Apply = (getData: Props) => {
    const imgUrl = "https://static.miraheze.org/projectsekaiwiki/thumb/9/93/Hatsune_Miku.png/1200px-Hatsune_Miku.png";

    return (
        <>
            <Modal
                isOpen={getData.open}
                placement="center"
                onOpenChange={getData.onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 leading-none">
                                <span className="font-semibold">Lamar ke Tokopedia</span>
                                <span className="text-small text-gray-950/60">Software Engineer</span>
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex gap-x-3">
                                    <div className="flex-shrink-0">
                                        <Avatar showFallback name='Miku' src={imgUrl} size="lg" />
                                    </div>
                                    <div className="flex-shrink flex flex-col">
                                        <span className="text-lg font-semibold tracking-wide">Hatsune Miku</span>
                                        <div className="flex items-center space-x-1 text-tiny tracking-wide">
                                            <span>
                                                Software Engineer
                                            </span>
                                            <div className="inline-block p-[1px] bg-slate-700 rounded-full"></div>
                                            <span>Tokyo, Japan</span>
                                            <span>Professional</span>
                                        </div>
                                    </div>
                                </div>

                                {/* information contact */}
                                <div className="space-y-4">
                                    {/* email */}
                                    <Select
                                        label="Pilih Email"
                                        className="w-full"
                                    >
                                        <SelectItem key={1} value={'miku-chan@gmail.com'}>
                                            miku-chan@gmail.com
                                        </SelectItem>
                                    </Select>

                                    {/* phone */}
                                    <Select
                                        label="Pilih Nomor Telepon"
                                        className="w-full"
                                    >
                                        <SelectItem key={2} value={'+99 4883-3438-3828'}>
                                            +99 4883-3438-3828
                                        </SelectItem>
                                    </Select>

                                    {/* resume */}
                                    <Select
                                        label="Pilih Dokumen Lamaran"
                                        className="w-full"
                                    >
                                        <SelectItem key={3} value={'CV - Hatsune Miku'}>
                                            CV - Hatsune Miku | 24 Des 2023
                                        </SelectItem>
                                    </Select>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Tutup
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={onClose}
                                    startContent={<FontAwesomeIcon icon={faPaperPlane} />}
                                >
                                    Kirim
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default Apply