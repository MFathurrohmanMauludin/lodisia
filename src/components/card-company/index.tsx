import { Avatar, Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";

interface Props {
    id: number;
    name: string;
    banner: string;
    logo: string;
    job: number;
    post: number;
    about: string;
}

const CompanyCard = (data: Props) => {
    return (
        <>
            <Card className="border-1 inline-block border-slate-500/10 hover:border-cyan-500 hover:-translate-y-2 ease-in duration-300 rounded-lg" key={data.id}>
                {/* card head */}
                <CardHeader>
                    <div className="flex flex-col">
                        <Image className="border-1 border-white z-0 h-[120px] object-cover bg-cover bg-top" width={300} height={120} src={data.banner} alt="tokopedia" radius="sm" loading="lazy" />
                        <div className="flex justify-center translate-x-0 -mt-8 w-">
                            <Avatar className="border-4 border-white object-cover bg-cover bg-center" src={data.logo} size="lg" alt="brand perusahaan" />
                        </div>
                    </div>
                </CardHeader>

                {/* card body */}
                <CardBody className="overflow-hidden pt-0">
                    <span className="text-[18px] tracking-wide capitalize font-medium text-blue-400" tabIndex={0}>{data.name}</span>
                    <div className="flex items-center gap-x-4 text-gray-500" tabIndex={0}>
                        <div className="space-x-0.5 text-tiny"><FontAwesomeIcon icon={faBriefcase} /> <span>{data.job} Loker Tersedia</span></div>
                        <div className="space-x-0.5 text-tiny"><FontAwesomeIcon icon={faNewspaper} /> <span>{data.post} Posting</span></div>
                    </div>

                    <p className="text-small line-clamp-2 mt-2 text-slate-800" tabIndex={0}>{data.about}</p>
                </CardBody>
            </Card>
        </>
    )
}

export default CompanyCard