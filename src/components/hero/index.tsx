import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@nextui-org/react"

const Hero = () => {
    return (
        <div className="grid grid-cols-2 p-8">
            <div className="flex flex-col">
                <h1 className="text-5xl leading-tight">Temukan <span className="font-extrabold capitalize">pekerjaan impian</span> Anda dengan mudah dan nyaman</h1>
                <div className="py-8">
                    <h5>Dengan sepenuh hati, kami membantu para disabilitas untuk menemukan lapangan pekerjaan yang sesuai dengan minat, bakat dan kemampuannya tanpa harus menunda terlalu lama</h5>
                </div>
                <div className="flex items-center">
                    <Button size="lg" radius="md" color="primary" variant="shadow">
                        <FontAwesomeIcon icon={faSearch} /> <span className="font-medium">Ayo temukan</span>
                    </Button>
                </div>
                <div className="grid grid-cols-3 gap-x-4 pt-8">
                    <div className="flex flex-col">
                        <span className="font-bold text-[24px]">1.760.390</span>
                        <h3 className="font-semibold text-slate-950/60">Disabilitas Terbantu</h3>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-[24px]">25.438</span>
                        <h3 className="font-semibold text-slate-950/60">Perusahaan Aktif</h3>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-[24px]">200</span>
                        <h3 className="font-semibold text-slate-950/60">Bidang Pekerjaan</h3>
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