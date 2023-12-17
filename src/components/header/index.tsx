import Notification from "../notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link } from "@nextui-org/react";
import Accesibility from "../accessibility";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Login from "../login";
import SignUp from "../sign-up";

const Header = () => {
    const logo = "https://i.ibb.co/nD7MXWP/lodisia.png";
    return (
        <header className="w-full py-3 px-4 shadow-md rounded-b-xl">
            <nav className="flex justify-between items-center">
                {/* left content */}
                <img src={logo} alt="logo" className="w-[127px] h-[36px] object-contain bg-cover bg-center" />

                {/* center content */}
                <div className="flex items-center md:hidden gap-x-4 text-[16px] capitalize">
                    <a className="px-2 py-2 text-slate-600 hover:text-slate-950 font-medium" href="/">Beranda</a>
                    <a className="px-2 py-2 text-slate-600 hover:text-slate-950 font-medium" href="/memulai-karir">Memulai Karir</a>
                    <a className="px-2 py-2 text-slate-600 hover:text-slate-950 font-medium" href="/cari-pekerjaan">Cari Pekerjaan</a>
                    <a className="px-2 py-2 text-slate-600 hover:text-slate-950 font-medium" href="/daftar-perusahaan">Daftar Perusahaan</a>
                </div>

                {/* right content */}
                <div className="flex items-center flex-row gap-x-4">
                    <Notification />
                    <Accesibility />
                    <Button
                        href="/lowongan-tersimpan"
                        as={Link}
                        variant="light"
                        color="default"
                        className="text-[24px] text-gray-400 hover:text-gray-700"
                        isIconOnly
                        aria-label="tombol lowongan tersimpan">
                        <FontAwesomeIcon icon={faHeart} aria-label="gambar pencarian" />
                    </Button>
                    <div className="flex items-center sm:hidden gap-x-2 ml-2 text-[16px] font-medium">
                        <Login />
                        <SignUp />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header