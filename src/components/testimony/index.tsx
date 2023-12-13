/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, ScrollShadow } from "@nextui-org/react"
// import imageWoman from "../../assets/woman-disability-works.png"
import imageBlind from "../../assets/blind-worker.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

interface Props {
    id: number;
    username: string;
    company: string;
    profecy: string;
    photo: string;
    story: string;
    disability: any;
    control: { nextContent: any; prevContent: any };
}

const Testimony = (getData: Props) => {
    return (
        <div className="relative flex justify-items-center px-16" id="slideButton">
            <div className="absolute w-[90%] top-[50%] z-20">
                <div className="flex justify-between" id="slideActive">
                    <Button
                        isIconOnly
                        className="border-1 bg-white hover:!opacity-100 -ml-6 text-gray-400"
                        onClick={() => getData.control.prevContent()}
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
                        onClick={() => getData.control.nextContent()}
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
                            {getData.story}
                        </ScrollShadow>
                    </p>
                    <div className="flex items-center gap-x-3" aria-label="kelainan yang dimiliki Anita Prasmawati" tabIndex={0}>
                        {
                            getData.disability.map((data: any) => (
                                <span className="border-1 border-slate-400 px-4 py-1 rounded-full" tabIndex={0} key={data.id}>{data.name}</span>
                            ))
                        }
                    </div>
                    <div className="flex flex-col mt-4">
                        <h4 className="font-extrabold" tabIndex={0} aria-label="ditulis oleh">{getData.username}</h4>
                        <span tabIndex={0}>Diterima di {getData.company} sebagai <span className="font-semibold capitalize">{getData.profecy}</span></span>
                        <div className="flex items-center gap-x-2 py-4">
                            <button className="p-[6px] border-2 border-gray-500 bg-gray-400/30 inline-block focus-within:px-4 hover:px-4 ease-in duration-300 rounded-full"></button>
                            <button className="p-[6px] border-2 border-gray-500/10 bg-gray-400/30 inline-block focus-within:px-4 hover:px-4 ease-in duration-300 rounded-full"></button>
                            <button className="p-[6px] border-2 border-gray-500/10 bg-gray-400/30 inline-block focus-within:px-4 hover:px-4 ease-in duration-300 rounded-full"></button>
                        </div>
                    </div>
                </div>

                {/* photo */}
                <div className="flex flex-col justify-center items-center">
                    <div className="relative overflow-hidden pt-16 px-10">
                        <div className="static flex justify-center items-center">
                            <img
                                className="ml-8 w-auto h-[300px] object-cover bg-center z-10"
                                srcSet={imageBlind}
                                width={500}
                                height={300}
                                alt="photo testimony" />
                            <div className="absolute top-[75px] z-0 rotate-45 bg-slate-300/30 w-[240px] h-[240px] inline-block rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony