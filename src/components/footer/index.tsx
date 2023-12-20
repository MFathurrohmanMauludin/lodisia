import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons/faFacebookSquare"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import instagramIcon from "../../assets/instagram.svg"
import { faTiktok } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    const year = new Date().getFullYear();
    const logo = "https://i.ibb.co/nD7MXWP/lodisia.png";

    return (
        <>
            <div className="flex lg:flex-wrap lg:gap-y-8 md:flex-wrap md:gap-8 gap-x-4 px-4 py-8 rounded-t-lg">
                <div className="flex flex-col grow">
                    <img src={logo} className="w-[100px] object-contain bg-cover bg-center" alt="Lodisia Logo" width={127} height={36} />
                </div>
                {/* tentang perusahaan */}
                <div className="flex flex-col grow gap-y-3">
                    <span className="text-[18px] font-semibold">Tentang Kami</span>
                    <ul className="space-y-2">
                        <li><a href="#">Lodisia</a></li>
                        <li><a href="#">Mitra Kami</a>Mitra Kami</li>
                        <li><a href="#">Berita</a></li>
                    </ul>
                </div>

                {/* pekerjaan tersedia */}
                <div className="w-[300px] flex flex-col grow gap-y-3">
                    <span className="text-[18px] font-semibold">Pekerjaan banyak dicari</span>
                    <div className="flex flex-wrap items-center gap-2 text-[12px] text-cyan-700">
                        <a href="#" className="border-1 border-cyan-500 px-3 py-1 rounded-full">Web Developer</a>
                        <a href="#" className="border-1 border-cyan-500 px-3 py-1 rounded-full">Accounting</a>
                        <a href="#" className="border-1 border-cyan-500 px-3 py-1 rounded-full">Entry Data</a>
                        <a href="#" className="border-1 border-cyan-500 px-3 py-1 rounded-full">Customer Service</a>
                        <a href="#" className="border-1 border-cyan-500 px-3 py-1 rounded-full">Graphic Designer</a>
                        <a href="#" className=" bg-cyan-700 text-white px-3 py-1 rounded-full">Lihat Selengkapnya</a>
                    </div>
                </div>

                {/* pertanyaan yang sering ditanyakan */}
                <div className="flex flex-col grow gap-y-3">
                    <span className="text-[18px] font-semibold">Sering ditanyakan</span>
                    <ul className="space-y-2">
                        <li><a href="#">Lodisia itu apa?</a></li>
                        <li><a href="#">Apakah Lodisia ini resmi?</a></li>
                        <li><a href="#">Apa pekerjaan untuk Tunanetra?</a></li>
                    </ul>
                </div>

                {/* dukungan untuk pengguna */}
                <div className="flex flex-col grow gap-y-3">
                    <span className="text-[18px] font-semibold">Dukungan</span>
                    <ul className="space-y-2">
                        <li><a href="#">Hubungi Kami</a></li>
                        <li><a href="#">Syarat & Ketentuan</a></li>
                        <li><a href="#">Kebijakan Privasi</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                {/* sosial media */}
                <div className="grow space-y-4">
                    <div className="flex flex-col gap-y-3">
                        <span className="text-[18px] font-semibold">Ikuti Kami</span>
                        <ul className="flex flex-row md:flex-wrap space-x-4">
                            <li><a href="#" aria-label="ikuti instagram kami"><img className="max-w-md h-[32px]" src={instagramIcon} alt="ikuti instagram kami" width={32} height={32} /></a></li>
                            <li><a className="text-blue-500" aria-label="ikuti instagram kami" href="#"><FontAwesomeIcon fontSize={32} icon={faFacebookSquare} /></a></li>
                            <li><a className="text-slate-900" aria-label="ikuti twitter kami" href="#"><FontAwesomeIcon fontSize={32} icon={faXTwitter} /></a></li>
                            <li><a className="text-slate-900" aria-label="ikuti tiktok kami" href="#"><FontAwesomeIcon fontSize={32} icon={faTiktok} /></a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <span className="text-[14px] font-medium">Unduh Versi Mobile</span>
                        <ul className="flex flex-row space-x-4">
                            <li><a className="text-slate-900" href="#">Google Play</a></li>
                            <li><a className="text-slate-900" href="#">App Store</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-between bg-stone-950/80 text-white p-4">
                <span>
                    &copy; {(year === 2023) ? `2023` : `2023 - ${year}`} PT Lodisia
                </span>
                <div className="space-x-4">
                    <a href="#">Term of Service</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </>
    )
}

export default Footer