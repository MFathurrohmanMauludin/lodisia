/* eslint-disable @typescript-eslint/no-explicit-any */
import { faBuilding, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react"
import { useLocation } from "react-router-dom";

interface Props {
    listJobs: any;
}

const AnotherJobs = (getData: Props) => {
    const startDate = (data: number) => new Date(data).getDate();
    const finishDate = (data: number) => new Date(data).toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' });
    const location = useLocation();
    const { search } = location;

    // regex
    const regexCompany = /(?:\?|&)company=([^&?]+)/;
    const regexId = /(?:\?|&)id=([^&?]+)/;

    // get company name & id work
    const matchCompany = search.match(regexCompany);
    const company = matchCompany ? decodeURIComponent(matchCompany[1]).replace(/\+/g, ' ') : ' ';

    const matchId = regexId.exec(search);
    const getId = matchId ? matchId[1] : 0;

    // filter data
    const descData = getData.listJobs.sort((a: any, b: any) => b.startDate - a.startDate);
    const filterData = descData.filter((job: any) => job.id !== parseInt(`${getId}`) && job.company !== company);

    return (
        <>
            {
                filterData.map((job: any) => (
                    <Card className="mt-4 rounded-md p-1 w-[350px] sm:w-full" key={job.id}>
                        <CardHeader className="flex flex-row gap-x-4">
                            <Avatar className="border-1 border-gray-500/10 object-cover object-center" src={job.logo} alt="logo 1" size="md" />
                            <div className="flex flex-col gap-y-1">
                                <div className="flex items-center gap-x-2 text-[14px]" tabIndex={0}>
                                    <a
                                        href={`detail-pekerjaan?name=${job.name}&company=${job.company.replace(/ +/g, '+')}?id=${job.id}`}
                                        className={`${job.name.length <= 19 ? 'w-auto' : 'max-w-[20ch]'} line-clamp-1 overflow-hidden font-semibold tracking-wider`}>{job.name}</a>
                                    <div className="inline-block p-[2px] bg-gray-500 rounded-full"></div>
                                    <span className="text-tiny sm:line-clamp-1">{job.levelWork}</span>
                                </div>
                                <span className="text-tiny text-gray-500 flex items-center gap-x-1"><FontAwesomeIcon icon={faBuilding} />{job.company}</span>
                            </div>
                        </CardHeader>

                        <CardBody className="space-y-2">
                            <div className="flex flex-row gap-x-4">
                                <div className="flex flex-row items-center gap-x-2 text-gray-500">
                                    <FontAwesomeIcon fontSize={14} icon={faBriefcase} />
                                    <div className="flex items-center gap-x-1 text-tiny">
                                        <span>{job.typeContract}</span>
                                        <div className="inline-block p-[1px] bg-gray-500 rounded-full"></div>
                                        <span>{job.styleWork}</span>
                                    </div>
                                </div>

                                <div className="flex flex-row items-center gap-x-2 text-gray-500">
                                    <FontAwesomeIcon fontSize={14} icon={faCalendar} />
                                    <span className="text-tiny">{startDate(job.startDate)} - {finishDate(job.finishDate)}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-x-2">
                                {
                                    job.disability.map((data: any) => (
                                        <span
                                            className="border-1 border-slate-400 px-3 py-1 tracking-wide text-[12px] rounded-full"
                                            tabIndex={0}
                                            key={data.id}>
                                            {data.name}
                                        </span>
                                    ))
                                }
                            </div>
                        </CardBody>
                    </Card>
                ))
            }
        </>
    )
}

export default AnotherJobs