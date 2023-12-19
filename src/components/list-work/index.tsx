/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Link } from "@nextui-org/react";
import CardPosting from "../card-posting"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import HeadLine from "../title";
import { useLocation } from "react-router-dom";

interface Props {
    work: any;
    headLine: string;
}

const WorkList = (getData: Props) => {
    const dayDate = (data: number) => new Date(data).getDate();
    const finishDate = (data: number) => new Date(data).toLocaleDateString('id', { month: 'long', year: 'numeric' });
    const countDay = (finish: number) => Math.ceil((new Date(finish).getTime() - new Date().getTime()) / ((1000 * 3600) * 24));

    const location = useLocation();
    const { pathname } = location;

    return (
        <>
            <HeadLine headLine={getData.headLine} />
            <div className={`grid sm:grid-cols-1 lg:grid-cols-2 grid-cols-3 grid-flow-row gap-4`}>
                {
                    getData.work.map((data: any) => (
                        <CardPosting
                            key={data.id}
                            id={data.id}
                            logo={data.logo}
                            name={data.name}
                            company={data.company}
                            level={data.levelWork}
                            imgUrl={data.imgUrl}
                            styleWork={data.styleWork}
                            location={data.location}
                            disability={data.disability}
                            typeContract={data.typeContract}
                            dateStarted={`${dayDate(data.startDate)} - ${dayDate(data.finishDate)} ${finishDate(data.finishDate)}`}
                            countDown={`${countDay(data.finishDate) < 0 ? 0 : countDay(data.finishDate)}`} />
                    ))
                }
            </div>

            {/* button lihat semua - center */}
            {
                pathname === '/' ?
                    <div className="flex justify-center mt-8">
                        <div className="flex items-center gap-x-2 w-full">
                            <div className="grow h-[2px] bg-slate-400/30 inline-block rounded-full"></div>
                            <Button
                                href="/cari-pekerjaan"
                                as={Link}
                                variant="light"
                                color="default"
                                radius="full"
                                startContent={<FontAwesomeIcon icon={faEye}
                                    aria-label="icon mata" />}
                                aria-label="lihat semua lowongan tersedia">
                                Lihat Semua Lowongan
                            </Button>
                            <div className="grow h-[2px] bg-slate-400/30 inline-block rounded-full"></div>
                        </div>
                    </div>
                    : ''
            }
        </>
    )
}

export default WorkList