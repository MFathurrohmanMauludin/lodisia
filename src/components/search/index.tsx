import { faMicrophone, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Input } from "@nextui-org/react"

const SearchField = () => {
    return (
        <div className="flex justify-center pt-14 pb-4">
            <div className="flex items-center w-[500px] gap-x-2">
                <Input
                    variant="bordered"
                    color="default"
                    size="sm"
                    isClearable
                    radius="full"
                    placeholder="Cari Lowongan Kerja di sini..."
                    startContent={
                        <FontAwesomeIcon className="flex-shrink-0 text-gray-400" fontSize={16} icon={faSearch} />
                    }
                />

                <Button
                    variant="light"
                    color="default"
                    size="md"
                    radius="full"
                    isIconOnly
                    aria-label="aktifkan pencarian suara"
                    startContent={<FontAwesomeIcon className="flex-shrink" fontSize={24} icon={faMicrophone} />}
                />
            </div>
        </div>
    )
}

export default SearchField