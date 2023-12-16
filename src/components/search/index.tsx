import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Input } from "@nextui-org/react"

const SearchField = () => {
    return (
        <div className="flex justify-center pt-14 pb-4">
            <div className="w-[500px]">
                <Input
                    variant="bordered"
                    color="default"
                    size="sm"
                    isClearable
                    radius="full"
                    placeholder="Cari Lowongan Kerja disini..."
                    startContent={
                        <FontAwesomeIcon className="flex-shrink-0 text-gray-400" fontSize={16} icon={faSearch} />
                    }
                />
            </div>
        </div>
    )
}

export default SearchField