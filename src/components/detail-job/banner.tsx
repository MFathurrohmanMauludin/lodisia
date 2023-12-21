/* eslint-disable @typescript-eslint/no-explicit-any */
import { faStopCircle, faHeart } from "@fortawesome/free-regular-svg-icons"
import { faLocationArrow, faWallet, faBriefcase, faPaperclip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, Button } from "@nextui-org/react"
import JobDesc from "./desc"

interface Props {
    data: {
        id: number,
        name: string,
        company: string,
        finishDate: string,
        location: string,
        logo: string,
        levelWork: string,
        styleWork: string,
        typeContract: string,
        salary: string,
        disability: any,
        jobDesc: any,
    };

    anotherJobs: any;
}

const BannerJobs = (getData: Props) => {
    const banner = "https://source.unsplash.com/1200x760?google+place";

    return (
        <>
            {/* banner */}
            <div className="px-28 pt-[76px] pb-20 sm:px-4 md:px-8 bg-cover -mt-4" style={{ background: `url(${banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="flex flex-wrap sm:gap-y-4 md:justify-center lg:justify-center justify-start gap-x-8 bg-white py-6 px-8 rounded-xl">
                    {/* left content */}
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <Avatar
                            className="w-[100px] h-[100px]"
                            src={getData.data.logo}
                            size="lg"
                            radius="full"
                            alt="logo perusahaan" />
                        <div className="flex flex-col items-center">
                            <span className="text-[16px] tracking-wide font-semibold">{getData.data.company}</span>
                            <span className="text-[14px] text-gray-500 tracking-wide font-medium">Teknologi & Informasi</span>
                        </div>
                    </div>

                    {/* right content */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-x-2" tabIndex={0}>
                            <span className="text-[24px] sm:text-[16px] font-semibold">{getData.data.name}</span>
                            <div className="inline-block p-[2px] bg-gray-950 rounded-full"></div>
                            <span className="text-gray-500">{getData.data.levelWork}</span>
                        </div>
                        <div className="flex flex-row flex-wrap md:gap-y-2 lg:gap-y-1 items-center gap-x-4 pt-1 text-gray-500" tabIndex={0}>
                            <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon fontSize={18.47} icon={faLocationArrow} aria-label="lokasi penempatan" /> <span className="text-[14px]">{getData.data.location}</span>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon fontSize={17.15} icon={faWallet} aria-label="rentang gaji" /> <span className="text-[14px]">30.000.0000 - 50.000.000</span>
                            </div>
                            <div className="flex items-center gap-x-2" tabIndex={0}>
                                <FontAwesomeIcon fontSize={16} icon={faBriefcase} aria-label="gaya pekerjaan & kriteria kontrak" />
                                <div className="flex items-center gap-x-1 text-[14px]">
                                    <span>{getData.data.typeContract}</span>
                                    <div className="inline-block p-[2px] bg-gray-500 rounded-full"></div>
                                    <span>{getData.data.styleWork}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon fontSize={15} icon={faStopCircle} aria-label="batas lamaran" /> <span className="text-[14px]">Batas lamaran {getData.data.finishDate}</span>
                            </div>
                        </div>

                        <div className="flex flex-col pt-3 grid-cols-2 gap-y-2">
                            <span className="font-medium tracking-wider">kriteria disabilitas</span>
                            <div className="space-x-2">
                                {
                                    getData.data.disability.map((data: any) => (
                                        <span className="border-1 border-slate-400 px-3 py-1 tracking-wide text-[14px] rounded-full" tabIndex={0} key={data.id}>
                                            {data.name}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex flex-row flex-wrap sm:gap-y-4 sm:justify-center lg:justify-center gap-x-3 pt-6">
                            <Button
                                className="text-[16px]"
                                variant="solid"
                                color="primary"
                                radius="full"
                                size="md"
                                startContent={<FontAwesomeIcon fontSize={21} icon={faPaperclip} />}
                            >Lamar</Button>
                            <Button
                                className="text-[16px]"
                                variant="light"
                                color="primary"
                                radius="full"
                                size="md"
                                startContent={<FontAwesomeIcon fontSize={21} icon={faHeart} aria-label="ikon favorite" />}
                            >Simpan</Button>
                        </div>

                    </div>
                </div>
            </div>

            <JobDesc desc={getData.data.jobDesc} listJobs={getData.anotherJobs} />
        </>
    )
}

export default BannerJobs