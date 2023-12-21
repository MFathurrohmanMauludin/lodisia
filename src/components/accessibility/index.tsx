/* eslint-disable @typescript-eslint/no-explicit-any */
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import AccesibileButton from "../button/AccesibilityButton";
import { useEffect, useState } from "react";

const Accesibility = () => {
    const [isOpen, setOpen] = useState(false);
    const [isColorBlind, setColorBlind] = useState(false);
    const [isBlind, setBlind] = useState(false);

    // color blind
    const getBody = document.querySelector('body');
    isColorBlind ? getBody?.setAttribute('class', 'saturate-0') : getBody?.setAttribute('class', '');

    useEffect(() => {
        const handleScroll = () => {
            // Check the scroll position using window.scrollY
            const scrollY = window.scrollY || document.documentElement.scrollTop;

            // Adjust the threshold value based on when you want to close the modal
            const scrollThreshold = 50;

            // Close the modal if the scroll position exceeds the threshold
            if (scrollY > scrollThreshold) {
                setOpen(false);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


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
                            id={1}
                            name={'buta warna'}
                            icon={'faEye'}
                            control={() => setColorBlind(!isColorBlind)}
                            label={isColorBlind} />

                        <AccesibileButton
                            id={2}
                            name={'penglihatan rendah'}
                            icon={'faLowVision'}
                            control={() => console.log('penglihatan rendah')}
                            label={false} />

                        <AccesibileButton
                            id={0}
                            name={'buta total'}
                            icon={'faPersonWalkingWithCane'}
                            control={() => setBlind(!isBlind)}
                            label={isBlind} />


                        <AccesibileButton
                            id={3}
                            name={'dyslexia'}
                            icon={'faFont'}
                            control={() => console.log('dyslexia')}
                            label={false} />

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