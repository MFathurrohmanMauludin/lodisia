import { faBuilding, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react"

const AnotherJobs = () => {
    const imgUrl = "https://source.unsplash.com/120x120?Tokopedia";

    return (
        <>
            <Card className="mt-4 rounded-md p-1 w-[350px] sm:w-full">
                <CardHeader className="flex flex-row gap-x-4">
                    <Avatar src={imgUrl} alt="logo 1" size="lg" />
                    <div className="flex flex-col gap-y-1">
                        <div className="flex items-center gap-x-2 text-[14px]" tabIndex={0}>
                            <a href="#" className="text font-semibold tracking-wider">Google Cloud Engineer</a>
                            <div className="inline-block p-[2px] bg-gray-500 rounded-full"></div>
                            <span className="text-tiny">Entry Level</span>
                        </div>
                        <span className="text-tiny text-gray-500 flex items-center gap-x-1"><FontAwesomeIcon icon={faBuilding} />PT Tokopedia</span>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="flex flex-row gap-x-4">
                        <div className="flex flex-row items-center gap-x-2 text-gray-500">
                            <FontAwesomeIcon fontSize={14} icon={faBriefcase} />
                            <div className="flex items-center gap-x-1 text-tiny">
                                <span>Full-time</span>
                                <div className="inline-block p-[1px] bg-gray-500 rounded-full"></div>
                                <span>On-site</span>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-x-2 text-gray-500">
                            <FontAwesomeIcon fontSize={14} icon={faCalendar} />
                            <span className="text-tiny">15 - 20 Desember 2023</span>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default AnotherJobs