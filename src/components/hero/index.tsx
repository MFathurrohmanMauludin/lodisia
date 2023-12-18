import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Image } from "@nextui-org/react"

const Hero = () => {
    const imgUrl = 'https://i.ibb.co/NrM6pps/loker.webp';

    return (
        <div className="grid grid-cols-2 md:grid-cols-1 p-8 sm:p-4" id="main-content">
            <div className="flex flex-col">
                <h1 className="text-[48px] lg:text-2xl leading-tight" tabIndex={0}>Temukan <span className="font-extrabold capitalize">pekerjaan impian</span> Anda dengan mudah dan nyaman</h1>
                <div className="py-8" tabIndex={0}>
                    Dengan sepenuh hati, kami membantu para disabilitas untuk menemukan lapangan pekerjaan yang sesuai dengan minat, bakat dan kemampuannya tanpa harus menunda terlalu lama
                </div>
                <div className="flex items-center">
                    <Button size="lg" radius="full" color="primary" variant="shadow">
                        <FontAwesomeIcon icon={faSearch} /> <span className="font-medium">Ayo temukan</span>
                    </Button>
                </div>
                <div className="grid grid-cols-3 gap-x-4 pt-8">
                    <div className="flex flex-col" tabIndex={0}>
                        <span className="font-bold text-[24px] sm:text-[21px]" >1.760.390</span>
                        <div className="font-semibold text-slate-950/60 sm:text-[16px]">Disabilitas Terbantu</div>
                    </div>
                    <div className="flex flex-col" tabIndex={0}>
                        <span className="font-bold text-[24px] sm:text-[21px]">25.438</span>
                        <div className="font-semibold text-slate-950/60 sm:text-[16px]">Perusahaan Aktif</div>
                    </div>
                    <div className="flex flex-col" tabIndex={0}>
                        <span className="font-bold text-[24px] sm:text-[21px]">200</span>
                        <div className="font-semibold text-slate-950/60 sm:text-[16px]">Bidang Pekerjaan</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center md:pt-32">
                <Image className="flex-shrink" alt="banner" src={imgUrl} width={500} height={500} loading="eager" />
            </div>
        </div>
    )
}

export default Hero