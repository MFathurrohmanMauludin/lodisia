import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import AccesibileButton from "../button/AccesibilityButton"
import { useState } from "react"

const Accesibility = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Popover
                key={1}
                isOpen={isOpen}
                onOpenChange={(open) => setOpen(open)}
                placement="bottom"
                color="default">
                <PopoverTrigger>
                    <Button
                        color="default"
                        variant="light"
                        className="text-[24px] text-gray-400 hover:text-gray-700"
                        isIconOnly
                        aria-label="tombol akses disabilitas">
                        <FontAwesomeIcon icon={faAccessibleIcon} aria-label="ikon disabilitas" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-4">
                        <AccesibileButton
                            id={0}
                            name={'buta total'}
                            icon={'faPersonWalkingWithCane'} />

                        <AccesibileButton
                            id={2}
                            name={'buta warna'}
                            icon={'faEye'} />

                        <AccesibileButton
                            id={3}
                            name={'penglihatan rendah'}
                            icon={'faLowVision'} />

                        <AccesibileButton
                            id={4}
                            name={'dyslexia'}
                            icon={'faFont'} />

                    </div>

                    <Button
                        className="mt-4"
                        variant="light"
                        color="default"
                        size="sm"
                        radius="full"
                        aria-label="tombol tutup navigasi"
                        onPress={() => setOpen(false)}
                    >
                        Tutup Navigasi
                    </Button>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default Accesibility