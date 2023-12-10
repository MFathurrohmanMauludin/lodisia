// import { Dropdown } from "@nextui-org/react";

import DropDown from "../button/DropDown";

const Header = () => {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Facebook.svg/2560px-Facebook.png";
    return (
        <header className="w-full py-3 px-4 shadow-md rounded-b-xl">
            <div className="flex justify-between items-center">
                <img src={logo} alt="logo" className="w-[120px] h-[36px] object-cover bg-center" />
                <nav className="flex items-center gap-x-4 text-[16px] capitalize">
                    <a className="px-2 py-2" href="#">Beranda</a>
                    <a href="#">Memulai Karir</a>
                    <DropDown />
                    <div className="flex flex-row gap-x-2">
                        <a href="#" className="border-1 border-cyan-600 text-cyan-700 tracking-wide px-4 py-[6px] rounded-full">Daftar</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header