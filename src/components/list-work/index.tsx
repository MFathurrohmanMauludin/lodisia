/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Link, Pagination } from "@nextui-org/react";
import CardJob from "../card-job"
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
    const yearDate = (data: number) => new Date(data).getFullYear();

    const startDate = (data: number) => new Date(data).toLocaleDateString('id', { month: 'short', year: 'numeric' });
    const finishDate = (data: number) => new Date(data).toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' });
    const countDay = (finish: number) => Math.ceil((new Date(finish).getTime() - new Date().getTime()) / ((1000 * 3600) * 24));

    const location = useLocation();
    const { pathname } = location;

    const descData = getData.work.sort((a: any, b: any) => dayDate(b.startDate) - dayDate(a.startDate));

    const limitData = pathname === '/' ? descData.slice(0, 6) : descData;

    return (
        <>
            <HeadLine headLine={getData.headLine} />
            <div className={`grid sm:grid-cols-1 lg:grid-cols-2 grid-cols-3 grid-flow-row gap-4`}>
                {
                    limitData.map((data: any) => (
                        <CardJob
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
                            dateStarted={`${dayDate(data.startDate)} ${yearDate(data.startDate) !== yearDate(data.finishDate) ? startDate(data.startDate) : ''} - ${finishDate(data.finishDate)}`}
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
                    :
                    <div className="flex justify-center pt-8">
                        <Pagination showControls total={10} initialPage={1} />
                    </div>
            }
        </>
    )
}

export default WorkList