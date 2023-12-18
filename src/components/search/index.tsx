import { faMicrophone, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Input, Select, SelectItem } from "@nextui-org/react"
import { useLocation } from "react-router-dom";

interface Props {
    select: {
        workSelect: boolean;
        styleSelect: boolean;
        sectorSelect: boolean;
        locationSelect: boolean;
        experienceSelect: boolean;
    }
}

const SearchField = (data: Props) => {
    const location = useLocation();
    const { pathname } = location;
    return (
        <div className="pt-16 pb-4 px-16 sm:py-4 sm:px-0">
            <div className="flex justify-center sm:px-4">
                <div className="flex items-center w-[500px] gap-x-2">
                    <Input
                        variant="bordered"
                        color="default"
                        size="sm"
                        isClearable
                        radius="full"
                        placeholder={`Cari Nama Perusahaan${pathname === '/cari-pekerjaan' ? "/Nama Pekerjaan" : ""} di sini...`}
                        startContent={<FontAwesomeIcon className="flex-shrink-0 text-gray-400" fontSize={16} icon={faSearch} />} />

                    <Button
                        className="text-gray-600"
                        variant="light"
                        color="default"
                        size="md"
                        radius="full"
                        isIconOnly
                        aria-label="aktifkan pencarian suara"
                        startContent={<FontAwesomeIcon className="flex-shrink" fontSize={24} icon={faMicrophone} />} />
                </div>
            </div>

            {/* berdasarkan select button */}
            <div className="flex justify-center sm:justify-start sm:px-4 sm:scrollbar-hide sm:overflow-x-scroll gap-x-4 pt-4">

                {/* work field */}
                {
                    data.select.workSelect ?
                        <Select
                            key={1}
                            color="default"
                            label="Bidang Pekerjaan"
                            radius="sm"
                            placeholder="Pilih bidang pekerjaan"
                            className="max-w-xs"
                        >
                            <SelectItem key={0} value={'semua'}>Semua Kategori</SelectItem>
                            <SelectItem key={1} value={'it & software'}>IT & Software</SelectItem>
                            <SelectItem key={2} value={'keuangan & akuntansi'}>Keuangan & Akuntansi</SelectItem>
                            <SelectItem key={3} value={'pemasaran & periklanan'}>Pemasaran & Periklanan</SelectItem>
                        </Select>
                        :
                        ''
                }


                {/* work style */}
                {
                    data.select.styleSelect ?
                        <Select
                            key={2}
                            color="default"
                            label="Gaya Pekerjaan"
                            radius="sm"
                            placeholder="Pilih gaya pekerjaan"
                            className="max-w-xs"
                        >
                            <SelectItem key={0} value={'semua'}>Semua Kategori</SelectItem>
                            <SelectItem key={1} value={'remote'}>Remote</SelectItem>
                            <SelectItem key={2} value={'hybrid'}>Hybrid</SelectItem>
                            <SelectItem key={3} value={'onsite'}>On-site</SelectItem>
                        </Select>
                        : ''
                }


                {/* experience level */}
                {
                    data.select.experienceSelect ?
                        <Select
                            key={3}
                            color="default"
                            label="Tingkatan Pengalaman"
                            radius="sm"
                            placeholder="Pilih tingkatan pengalaman"
                            className="max-w-xs"
                        >
                            <SelectItem key={0} value={'semua'}>Semua Kategori</SelectItem>
                            <SelectItem key={1} value={'entry level'}>Entry Level</SelectItem>
                            <SelectItem key={2} value={'mid-senior level'}>Mid-Senior Level</SelectItem>
                            <SelectItem key={3} value={'executive'}>Executive</SelectItem>
                        </Select>
                        : ''
                }

                {/* sector */}
                {
                    data.select.sectorSelect ?
                        <Select
                            key={4}
                            color="default"
                            label="Sektor Pekerjaan"
                            radius="sm"
                            placeholder="Pilih bidang pekerjaan"
                            className="max-w-xs"
                        >
                            <SelectItem key={0} value={'semua'}>Semua Kategori</SelectItem>
                            <SelectItem key={1} value={'it & software'}>Badan Usaha Milik Negara (BUMN)</SelectItem>
                            <SelectItem key={2} value={'keuangan & akuntansi'}>Industri Tekstil</SelectItem>
                            <SelectItem key={3} value={'pemasaran & periklanan'}>Industri Teknologi</SelectItem>
                        </Select>
                        :
                        ''
                }


                {/* location */}
                {
                    data.select.locationSelect ?
                        <Select
                            key={5}
                            color="default"
                            label="Lokasi Pekerjaan"
                            radius="sm"
                            placeholder="Pilih lokasi pekerjaan"
                            className="max-w-xs"
                        >
                            <SelectItem key={0} value={'semua'}>Semua Kategori</SelectItem>
                            <SelectItem key={1} value={'Jakarta'}>Jakarta</SelectItem>
                            <SelectItem key={2} value={'Jawa Barat'}>Jawa Barat</SelectItem>
                            <SelectItem key={3} value={'Jawa Timur'}>Jawa Timur</SelectItem>
                            <SelectItem key={4} value={'Jawa Tengah'}>Jawa Tengah</SelectItem>
                            <SelectItem key={5} value={'Jawa Tengah'}>Yogyakarta</SelectItem>
                        </Select>
                        : ''
                }
            </div>
        </div>
    )
}

export default SearchField