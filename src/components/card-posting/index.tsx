import { faBuilding, faCalendarCheck } from "@fortawesome/free-regular-svg-icons"
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardHeader, CardBody, Image, Avatar } from "@nextui-org/react"

const CardPosting = () => {
    return (
        <>
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex flex-row items-center gap-x-3">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />
                    <div className="capitalize leading-5">
                        <span className="text-[14px] tracking-wider font-bold">Software Engineer</span>
                        <span className="flex items-center gap-x-1 text-tiny text-default-500"><FontAwesomeIcon icon={faBuilding} aria-label="ikon gedung" /> PT Shopee International Indonesia</span>
                    </div>
                </CardHeader>
                <CardBody className="overflow-visible">
                    <Image
                        src="https://i.ibb.co/k4cw0MJ/victory-hatsune-miku.png"
                        className="w-[270px] h-[250px] object-cover bg-center rounded-xl"
                        alt="Card background"
                        width={270}
                        loading="lazy"
                    />
                    <div className="flex flex-row flex-wrap justify-between items-center pt-3 pb-1">
                        <div className="flex items-center gap-x-1 text-small"><FontAwesomeIcon fontSize={14} icon={faCalendarCheck} aria-aria-label="ikon kalendar" /><span className="mt-1">14 Desember 2023</span></div>
                        <span className="text text-slate-900 text-tiny font-medium tracking-wide bg-gray-300 border-1 px-2 py-[2px] rounded" aria-label="batas lamaran">Tersisa 7 Hari</span>
                    </div>

                    <div className="flex flex-row flex-wrap justify-between">
                        <div className="flex items-center gap-x-1 text-tiny"><FontAwesomeIcon fontSize={14} icon={faLocationDot} aria-label="ikon lokasi" /> <span>Bandung</span></div>
                        <div className="flex items-center gap-x-2 text-tiny">
                            <span>On-site</span>
                            <div className="bg-gray-950 p-[1px] inline-block rounded-full"></div>
                            <span>Full-time</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 py-3 text-[12px] font-medium">
                        <span className="border-1 border-slate-400 px-3 py-1 tracking-wide rounded-full" tabIndex={0} key={1}>Buta Warna</span>
                        <span className="border-1 border-slate-400 px-3 py-1 tracking-wide rounded-full" tabIndex={0} key={2}>Tunarungu</span>
                        <span className="border-1 border-slate-400 px-3 py-1 tracking-wide rounded-full" tabIndex={0} key={3}>Tunadaksa</span>
                    </div>
                </CardBody>
                <div className="flex justify-end gap-x-4 px-4">
                    <a className="flex items-center gap-x-2" href="detail-pekerjaan&id=1" id="detailWork">
                        <span className="text-[14px]">Lihat lebih lanjut</span>
                        <FontAwesomeIcon icon={faArrowRight} aria-label="panah ke samping" id="arrowButton" />
                    </a>
                </div>
            </Card>
        </>
    )
}

export default CardPosting