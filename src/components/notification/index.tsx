import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, Button, Listbox, ListboxItem, ListboxSection, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import { useState } from "react"
import { faBell, faBuilding } from "@fortawesome/free-regular-svg-icons"

const Notification = () => {
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
                        className="text-gray-400 hover:text-gray-700"
                        color="default"
                        variant="light"
                        isIconOnly
                        aria-label="tombol akses notifikasi">
                        <FontAwesomeIcon fontSize={24} icon={faBell} aria-label="ikon disabilitas" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="rounded-lg p-4">
                    <Listbox variant="flat" aria-label="Listbox menu with sections">
                        <ListboxSection title="Notifikasi Terbaru">
                            <ListboxItem
                                key="new"
                                description={(
                                    <div className="space-x-1">
                                        <FontAwesomeIcon icon={faBuilding} /><span aria-label="nama perusahaan">PT Tokopedia</span>
                                    </div>
                                )}
                                startContent={(<Avatar className="flex-shrink-0" size="md" src="https://i.ibb.co/wQHcPJP/tokopedia-logo.webp" radius="full" alt="gambar perusahaan" />)}
                            >
                                <div className="flex items-center gap-x-2">
                                    <span className="text-md text-semibold" aria-label="nama pekerjaan">Software Engineer</span>
                                    <div className="p-[2px] bg-slate-950/60 inline-block rounded-full"></div>
                                    <span className="text-tiny text-slate-500" aria-label="informasi">1 Hari Lalu</span>
                                </div>
                            </ListboxItem>
                        </ListboxSection>
                    </Listbox>

                    <Button
                        className="mt-4 rounded-full"
                        variant="light"
                        color="default"
                        size="sm"
                        aria-label="tombol tutup navigasi"
                        onPress={() => setOpen(false)}
                    >
                        Tutup Notifikasi
                    </Button>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default Notification