import { Button, ScrollShadow } from "@nextui-org/react"
import imageWoman from "../../assets/woman-disability-works.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

const Testimony = () => {
    return (
        <div className="relative flex justify-items-center px-16" id="slideButton">
            <div className="absolute w-[90%] top-[50%] z-20">
                <div className="flex justify-between" id="slideActive">
                    <Button
                        isIconOnly
                        className="border-1 bg-white hover:!opacity-100 -ml-6 text-gray-400"
                        variant="solid"
                        color="default"
                        radius="full"
                        size="lg"
                        aria-label="Lihat Pendapat Sebelumnya"
                        id="prevContent">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Button>
                    <Button
                        isIconOnly
                        className="border-1 bg-white !hover:bg-white text-gray-400"
                        variant="solid"
                        color="default"
                        radius="full"
                        size="lg"
                        aria-label="Lihat Pendapat Selanjutnya"
                        id="nextContent">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-2">
                {/* testimony */}
                <div className="flex flex-col">
                    <h2 className="text-3xl font-semibold" tabIndex={0}>Apa pendapat mereka tentang kami?</h2>
                    <p className="py-4 pr-8" tabIndex={0}>
                        <ScrollShadow className="w-auto h-[200px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias libero tempore cum enim architecto ratione est? Ipsam ducimus laudantium voluptatum hic repellat fugit placeat necessitatibus voluptas, suscipit unde! Illo, itaque maxime? Quasi magni inventore, eligendi ea commodi laborum odio laboriosam pariatur dolorem, consequuntur dicta quibusdam assumenda harum deleniti quisquam?
                        </ScrollShadow>
                    </p>
                    <div className="flex items-center gap-x-3" aria-label="kelainan yang dimiliki Anita Prasmawati">
                        <span className="border-1 border-slate-400 px-4 py-1 rounded-full" tabIndex={0}>Tunarungu</span>
                        <span className="border-1 border-slate-400 px-4 py-1 rounded-full" tabIndex={0}>Tunadaksa</span>
                        <span className="border-1 border-slate-400 px-4 py-1 rounded-full" tabIndex={0}>Tunawicara</span>
                    </div>
                    <div className="flex flex-col mt-4">
                        <h4 className="font-extrabold" tabIndex={0} aria-label="ditulis oleh">Anita Prasmawati</h4>
                        <span tabIndex={0}>Diterima di PT Shopee International Indonesia</span>
                    </div>
                </div>

                {/* photo */}
                <div className="flex flex-col justify-center items-center">
                    <div className="relative overflow-hidden pt-16 px-10">
                        <div className="static flex justify-center">
                            <img className="ml-20 bg-center object-cover z-10" src={imageWoman} width={500} height={300} alt="photo testimony" />
                            <div className="absolute top-[75px] z-0 rotate-45 bg-slate-300/30 w-[240px] h-[240px] inline-block rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony