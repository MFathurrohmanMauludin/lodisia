/* eslint-disable @typescript-eslint/no-explicit-any */
import { faBuilding, faCalendarCheck } from "@fortawesome/free-regular-svg-icons"
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardHeader, CardBody, Image, Avatar } from "@nextui-org/react"

interface Props {
    id: number;
    name: string;
    company: string;
    logo: string;
    level: string;
    imgUrl: string;
    styleWork: string;
    typeContract: string;
    location: string;
    dateStarted: string;
    countDown: string;
    disability: any;
}

const CardJob = (getData: Props) => {
    return (
        <>
            <Card className="py-4 hover:-translate-y-2.5 hover:transition-all ease-in duration-300" id={`${getData.id}`}>
                <CardHeader className="pb-0 pt-2 px-4 flex flex-row items-center gap-x-3">
                    {/* logo perusahaan */}
                    <Avatar src={getData.logo} size="md" alt={`logo ${getData.name}`} />
                    <div className="capitalize leading-5">
                        <div className="flex items-center gap-x-2 text-[14px] tracking-wider">
                            {/* nama pekerjaan */}
                            <span className="font-bold line-clamp-1 max-w-[20ch]" aria-label={`nama pekerjaan ${getData.name}`} tabIndex={0}>{getData.name}</span>
                            <div className="bg-gray-950/30 p-[2px] inline-block rounded-full"></div>
                            {/* posisi pekerjaan */}
                            <span className="text-tiny font-medium" aria-label={`posisi pekerjaan ${getData.level}`} tabIndex={0}>{getData.level}</span>
                        </div>
                        {/* nama perusahaan */}
                        <span className="flex items-center gap-x-1 text-tiny text-default-500" aria-label={`nama perusahaan ${getData.company}`} tabIndex={0}>
                            <FontAwesomeIcon
                                icon={faBuilding}
                                aria-label="ikon gedung" /> {getData.company}
                        </span>
                    </div>
                </CardHeader>
                <CardBody className="overflow-visible">

                    {/* poster atau pamflet */}
                    <Image
                        src={getData.imgUrl}
                        className="w-[500px] h-[250px] bg-gray-950/60 object-center object-contain bg-cover rounded-xl"
                        width={500}
                        loading="lazy"
                        alt={`poster lowongan ${getData.name}`}
                        tabIndex={0}
                    />

                    <div className="flex flex-row flex-wrap justify-between items-center pt-3 pb-1">

                        {/* tanggal diterima pekerjaan */}
                        <div
                            className="flex items-center text-gray-500 gap-x-1 text-small">
                            <FontAwesomeIcon
                                fontSize={14}
                                icon={faCalendarCheck}
                                aria-label="ikon kalendar" />
                            <span
                                className="mt-1"
                                aria-label={`batas waktu lamaran ${getData.dateStarted}`}
                                tabIndex={0}>
                                {getData.dateStarted}
                            </span>
                        </div>

                        {/* batas lamaran */}
                        <span
                            className={`text text-white text-tiny font-medium tracking-wide ${getData.countDown === '0' ? 'bg-gray-400' : 'bg-red-600'} px-2 py-[2px] rounded`}
                            aria-label={`waktu lamaran tersisa ${getData.countDown} hari`}
                            tabIndex={0}>{getData.countDown === '0' ? 'Sudah Ditutup' : `Tersisa ${getData.countDown} Hari`}</span>
                    </div>

                    <div className="flex flex-row flex-wrap justify-between">

                        {/* lokasi penempatan */}
                        <div
                            className="flex items-center text-gray-500 gap-x-1 text-tiny">
                            <FontAwesomeIcon
                                fontSize={14}
                                icon={faLocationDot}
                                aria-label="ikon lokasi" />
                            <span aria-label={`lokasi penempatan ${getData.location}`} tabIndex={0}>{getData.location}</span>
                        </div>

                        {/* posisi dan gaya pekerjaan */}
                        <div className="flex items-center gap-x-2 text-tiny">
                            <span
                                aria-label={`kategori kontrak ${getData.typeContract}`}
                                tabIndex={0}>{getData.typeContract}
                            </span>
                            <div className="bg-gray-950 p-[1px] inline-block rounded-full"></div>
                            <span aria-label={`gaya pekerjaan ${getData.styleWork}`} tabIndex={0}>{getData.styleWork}</span>
                        </div>
                    </div>

                    {/* kebutuhan disabilitas */}
                    <div className="flex flex-wrap items-center gap-2 py-3 text-[12px] font-medium" aria-label={`${getData.name} dapat diisi oleh penderita`} tabIndex={0}>
                        {
                            getData.disability.map((data: any) => (
                                <span className="border-1 border-slate-400 px-3 py-1 tracking-wide rounded-full" tabIndex={0} key={data.id}>
                                    {data.name}
                                </span>
                            ))}
                    </div>
                </CardBody>

                {/* detail pekerjaan */}
                <div className="flex justify-end gap-x-4 px-4">
                    <a
                        href={`detail-pekerjaan?name=${getData.name}&company=${getData.company}`}
                        className="flex items-center gap-x-2 detailWork"
                    >
                        <span className="text-[14px]">Lihat lebih lanjut</span>
                        <FontAwesomeIcon icon={faArrowRight} aria-label="panah ke samping" id="arrowButton" />
                    </a>
                </div>
            </Card>
        </>
    )
}

export default CardJob