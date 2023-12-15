import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@nextui-org/react"

const Hero = () => {
    return (
        <div className="grid grid-cols-2 p-8">
            <div className="flex flex-col">
                <h1 className="text-[48px] lg:text-2xl leading-tight">Temukan <span className="font-extrabold capitalize">pekerjaan impian</span> Anda dengan mudah dan nyaman</h1>
                <div className="py-8">
                    Dengan sepenuh hati, kami membantu para disabilitas untuk menemukan lapangan pekerjaan yang sesuai dengan minat, bakat dan kemampuannya tanpa harus menunda terlalu lama
                </div>
                <div className="flex items-center">
                    <Button size="lg" radius="md" color="primary" variant="shadow">
                        <FontAwesomeIcon icon={faSearch} /> <span className="font-medium">Ayo temukan</span>
                    </Button>
                </div>
                <div className="grid grid-cols-3 gap-x-4 pt-8">
                    <div className="flex flex-col">
                        <span className="font-bold text-[24px]">1.760.390</span>
                        <div className="font-semibold text-slate-950/60">Disabilitas Terbantu</div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-[24px]">25.438</span>
                        <div className="font-semibold text-slate-950/60">Perusahaan Aktif</div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-[24px]">200</span>
                        <div className="font-semibold text-slate-950/60">Bidang Pekerjaan</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                2
            </div>
        </div>
    )
}

export default Hero