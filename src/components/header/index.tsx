import DropDown from "../button/DropDown";
import Notification from "../notification";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Facebook.svg/2560px-Facebook.png";
    return (
        <header className="w-full py-3 px-4 shadow-md rounded-b-xl">
            <nav className="flex justify-between items-center">
                <img src={logo} alt="logo" className="w-[127px] h-[36px] object-cover bg-center" />
                <div className="flex items-center gap-x-4 text-[16px] capitalize">
                    <a className="px-2 py-2 text-slate-600 hover:text-slate-950 font-medium" href="#">Beranda</a>
                    <a className="px-2 py-2 text-slate-600 hover:text-slate-950 font-medium" href="#">Memulai Karir</a>
                    <DropDown />
                    <a className="px-2 py-2 text-slate-600 hover:text-slate-950 font-medium" href="#">Daftar Perusahaan</a>
                </div>
                <div className="flex items-center flex-row gap-x-4">
                    <a href="#"
                        className="text-[24px] text-gray-400 hover:text-gray-700" aria-aria-label="Loker yang disimpan">
                        <FontAwesomeIcon icon={faSearch} />
                    </a>
                    <Notification />
                    <a href="#"
                        className="text-[24px] text-gray-400 hover:text-gray-700" aria-aria-label="Loker yang disimpan">
                        <FontAwesomeIcon icon={faHeart} />
                    </a>
                    <div className="flex items-center gap-x-2 ml-2 text-[16px] font-medium">
                        <a
                            href="#"
                            className="text-slate-700 hover:text-slate-900 tracking-wide px-4 py-[6px] rounded-full"
                        >
                            Login
                        </a>
                        <a
                            href="#"
                            className="border-1 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-white tracking-wide px-4 py-[6px] rounded-full"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header