import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import AccesibileButton from "../button/AccesibilityButton"

const Accesibility = () => {
    return (
        <>
            <Popover
                key={1}
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
                            name={'screen reader'}
                            icon={'faHeadphones'} />

                        <AccesibileButton
                            id={0}
                            name={'voice navigation'}
                            icon={'faMicrophone'} />

                        <AccesibileButton
                            id={0}
                            name={'color blind'}
                            icon={'faEye'} />

                        <AccesibileButton
                            id={0}
                            name={'low vision'}
                            icon={'faLowVision'} />

                        <AccesibileButton
                            id={0}
                            name={'dyslexia'}
                            icon={'faFont'} />

                    </div>
                </PopoverContent>

            </Popover>
        </>
    )
}

export default Accesibility