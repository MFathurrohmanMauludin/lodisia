/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, ScrollShadow } from "@nextui-org/react"
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
    dataPointer: any;
    control: { nextContent: any; prevContent: any, pointerContent: any };
}

const Testimony = (getData: Props) => {
    return (
        <div className="relative flex justify-items-center px-16 sm:px-4" id="slideButton">
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
            <div className="grid grid-cols-2 sm:grid-cols-1">
                {/* testimony */}
                <div className="flex flex-col">
                    <h2 className="text-3xl font-semibold" tabIndex={0}>Apa pendapat mereka tentang kami?</h2>
                    <div className="py-4 pr-8 text-[16px]" tabIndex={0}>
                        <ScrollShadow className="w-auto h-[240px]" isEnabled={false}>
                            {getData.story}
                        </ScrollShadow>
                    </div>
                    <div className="flex items-center gap-x-3" aria-label="kelainan yang dimiliki Anita Prasmawati" tabIndex={0}>
                        {
                            getData.disability.map((data: any) => (
                                <span className="border-1 border-slate-400 px-4 py-1 rounded-full" tabIndex={0} key={data.id}>{data.name}</span>
                            ))
                        }
                    </div>
                    <div className="flex flex-col mt-4">
                        <div className="font-extrabold" tabIndex={0} aria-label="ditulis oleh">{getData.username}</div>
                        <span tabIndex={0}>Diterima di {getData.company} sebagai <span className="font-semibold capitalize">{getData.profecy}</span></span>
                        <div className="flex items-center gap-x-2 py-4">
                            {
                                getData.dataPointer.map((data: any, index: any) => (
                                    <button key={data.id} onClick={() => getData.control.pointerContent(index)} className={`p-[6px] ${index === getData.id ? 'border-2 border-gray-500' : 'border-2 border-white'} bg-gray-300 inline-block hover:px-4 ease-in duration-300 rounded-full`} aria-label="0"></button>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* photo */}
                <div className="flex flex-col justify-center items-center">
                    <div className="relative overflow-hidden pt-16 px-10 bg-[url('https://i.ibb.co/8X4nd8P/Frame-2-2.png')] bg-center bg-contain">
                        <div className="static flex justify-center items-center">
                            <img
                                className="ml-4 w-auto h-[300px] object-cover bg-center z-10"
                                src={getData.photo}
                                width={500}
                                height={300}
                                alt="photo testimony" />
                            <div className="absolute top-[0px] -z-10 rotate-0 bg-[url('https://i.ibb.co/GnZRWZm/Frame-21-1.png')] bg-center bg-fill w-[350px] h-[350px] inline-block rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony