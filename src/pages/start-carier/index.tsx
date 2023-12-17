import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react"
import imgUrl from "../../assets/deaf-worker.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faReadme } from "@fortawesome/free-brands-svg-icons"

const StartCarier = () => {
    return (
        <>
            <div className="px-16 py-8">
                <div className="grid grid-cols-3">
                    <Card className="p-4">
                        <CardHeader className="border-1 p-0 rounded-lg">
                            <Image className="object-cover bg-cover bg-center" src={imgUrl} alt="photo posting" width={300} height={250} />
                        </CardHeader>

                        <CardBody>
                            <span className="text-[18px] tracking-wider font-semibold">Cara membuat CV yang menarik</span>
                            <div className="flex justify-start gap-x-4 text-[13px] text-gray-400">
                                <div className="flex items-center gap-x-1">
                                    <FontAwesomeIcon fontSize={16} icon={faReadme} /> 14.500x dibaca
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <FontAwesomeIcon fontSize={16} icon={faClock} /> 17 Desember 2023
                                </div>
                            </div>
                            <p className="line-clamp-3 text-[14px] mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam accusantium dignissimos accusamus, corrupti qui!</p>
                        </CardBody>

                        <CardFooter className="flex justify-end">
                            <a
                                href={`#`}
                                className="flex items-center gap-x-2 detailWork"
                            >
                                <span className="text-[14px]">Lihat lebih lanjut</span>
                                <FontAwesomeIcon icon={faArrowRight} aria-label="panah ke samping" id="arrowButton" />
                            </a>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default StartCarier