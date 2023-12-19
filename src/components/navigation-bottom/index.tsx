/* eslint-disable @typescript-eslint/no-explicit-any */
import { faBuilding } from "@fortawesome/free-regular-svg-icons"
import { faArrowRightFromBracket, faBriefcase, faHome, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Link } from "@nextui-org/react"

const NavigationBottom = () => {

    return (
        <>
            <div className="w-full hidden sm:fixed md:fixed sm:block md:block z-50 py-3 px-4 rounded-t-xl bg-white/60 backdrop-blur-sm border-t-1 bottom-0">
                <div className="flex justify-around items-center gapx-x-4">
                    <Button
                        href="/"
                        className="text-gray-500"
                        as={Link}
                        color="default"
                        variant="light"
                        size="md"
                        isIconOnly
                        aria-label="beranda"
                        startContent={<FontAwesomeIcon fontSize={24} icon={faHome} />}
                    />
                    <Button
                        href="/cari-pekerjaan"
                        className="text-gray-500"
                        as={Link}
                        color="default"
                        variant="light"
                        size="md"
                        isIconOnly
                        aria-label="cari pekerjaan"
                        startContent={<FontAwesomeIcon fontSize={24} icon={faSearch} />}
                    />
                    <Button
                        href="/memulai-karir"
                        className="text-gray-500"
                        as={Link}
                        color="default"
                        variant="light"
                        size="md"
                        isIconOnly
                        aria-label="mulai karir"
                        startContent={<FontAwesomeIcon fontSize={24} icon={faBriefcase} />}
                    />
                    <Button
                        href="/daftar-perusahaan"
                        className="text-gray-500"
                        as={Link}
                        color="default"
                        variant="light"
                        size="md"
                        isIconOnly
                        aria-label="cari perusahaan"
                        startContent={<FontAwesomeIcon fontSize={24} icon={faBuilding} />}
                    />
                    <Button
                        className="text-gray-500"
                        color="default"
                        variant="light"
                        size="md"
                        isIconOnly
                        aria-label="login or sign up"
                        startContent={<FontAwesomeIcon fontSize={24} icon={faArrowRightFromBracket} />}
                    />
                </div>
            </div>
        </>
    )
}

export default NavigationBottom