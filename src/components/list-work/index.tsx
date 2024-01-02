/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Link, Pagination } from "@nextui-org/react";
import CardJob from "../card-job"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import HeadLine from "../title";
import { useLocation } from "react-router-dom";
import { useState } from "react";

interface Props {
    jobs: any;
    headLine: string;
}

const JobList = (getData: Props) => {
    // convert date
    const dayDate = (data: number) => new Date(data).getDate();
    const yearDate = (data: number) => new Date(data).getFullYear();

    const startDate = (data: number) => new Date(data).toLocaleDateString('id', { month: 'short', year: 'numeric' });
    const finishDate = (data: number) => new Date(data).toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' });
    const countDay = (finish: number) => Math.ceil((new Date(finish).getTime() - new Date().getTime()) / ((1000 * 3600) * 24));

    // get path url
    const location = useLocation();
    const { pathname } = location;

    // limit show data
    const descData = getData.jobs.sort((a: any, b: any) => dayDate(b.startDate) - dayDate(a.startDate));
    const limitData = pathname === '/' ? descData.slice(0, 6) : descData;


    // pagination
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const totalPage = Math.ceil(getData.jobs.length / itemsPerPage);

    const currentItems = getData.jobs.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };


    return (
        <>
            <HeadLine headLine={getData.headLine} />
            <div className={`grid sm:grid-cols-1 lg:grid-cols-2 grid-cols-3 grid-flow-row gap-4`}>
                {
                    pathname === '/' ?
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
                        :

                        currentItems.map((data: any) => (
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
                        <Pagination
                            showControls
                            total={totalPage}
                            classNames={{ next: currentPage > 1 ? 'custom-next' : '', prev: currentPage < itemsPerPage ? 'custom-prev' : '' }}
                            initialPage={currentPage}
                            onChange={handlePageChange}
                        />
                    </div>
            }
        </>
    )
}

export default JobList