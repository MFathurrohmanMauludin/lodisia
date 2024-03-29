/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs, Tab, Card, CardBody, Button, Link } from '@nextui-org/react';
import CardJob from '../card-job';
import CardPosting from '../card-post';

interface Props {
    company: any;
    logo: any;
    jobs: any;
    posts: any;
    followers: any;
    detail: {
        about: string;
        location: string;
        name: string;
        operation: string;
        sector: string;
        url: string;
        ceo: string;
    }
}

const InfoCompany = (getData: Props) => {

    // convert date
    const dayDate = (data: number) => new Date(data).getDate();
    const yearDate = (data: number) => new Date(data).getFullYear();

    const startDate = (data: number) => new Date(data).toLocaleDateString('id', { month: 'short', year: 'numeric' });
    const finishDate = (data: number) => new Date(data).toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' });
    const countDay = (finish: number) => Math.ceil((new Date(finish).getTime() - new Date().getTime()) / ((1000 * 3600) * 24));

    return (
        <>
            <div className="flex w-full flex-col">
                <Tabs className='xs:flex xs:justify-center' key={'color'} color='primary' size='md' aria-label="Options" radius='full'>
                    {/* about company section */}
                    <Tab key="about" title="Tentang">
                        <Card radius='sm'>
                            <CardBody className='px-4' tabIndex={0}>
                                <span className="font-medium text-[28px] tracking-wide">Overview</span>
                                <p>{getData.detail.about}</p>
                                <div className="flex flex-row flex-wrap gap-x-16 gap-y-4 mt-4">
                                    <div className="flex flex-col gap-x-3">
                                        <span className="font-semibold">Website Resmi</span>
                                        <Button
                                            href={getData.detail.url}
                                            as={Link}
                                            variant="light"
                                            color="success"
                                            showAnchorIcon
                                            size="sm"
                                            isExternal>
                                            {getData.detail.name}
                                        </Button>
                                    </div>
                                    <div className="flex flex-col gap-x-3">
                                        <span className="font-semibold">Beroperasi</span>
                                        <span>{getData.detail.operation}</span>
                                    </div>
                                    <div className="flex flex-col gap-x-3">
                                        <span className="font-semibold">Sektor</span>
                                        <span>{getData.detail.sector}</span>
                                    </div>
                                    <div className="flex flex-col gap-x-3">
                                        <span className="font-semibold">CEO atau Founder</span>
                                        <span>{getData.detail.ceo}</span>
                                    </div>
                                    <div className="flex flex-col gap-x-3">
                                        <span className="font-semibold">Lokasi</span>
                                        <span>{getData.detail.location}</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>

                    {/* jobs section */}
                    <Tab key="jobs" title="Lowongan">
                        <div className='grid grid-cols-2 sm:grid-cols-1 gap-4'>
                            {
                                getData.jobs.map((job: any) => (
                                    <CardJob
                                        id={job.id}
                                        name={job.name}
                                        company={job.company}
                                        logo={job.logo}
                                        level={job.levelWork}
                                        imgUrl={job.imgUrl}
                                        styleWork={job.styleWork}
                                        typeContract={job.typeContract}
                                        location={job.location}
                                        dateStarted={`${dayDate(job.startDate)} ${yearDate(job.startDate) !== yearDate(job.finishDate) ? startDate(job.startDate) : ''} - ${finishDate(job.finishDate)}`}
                                        countDown={`${countDay(job.finishDate) < 0 ? 0 : countDay(job.finishDate)}`}
                                        disability={job.disability} />
                                ))
                            }
                        </div>
                    </Tab>

                    {/* posts section */}
                    <Tab key="posts" title="Postingan">
                        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                            {
                                getData.posts.map((data: any) =>
                                    <CardPosting
                                        id={data.id}
                                        company={getData.company}
                                        followers={getData.followers}
                                        imgCompany={getData.logo}
                                        imgPost={data.imgPost}
                                        content={data.content}
                                        tag={data.tag}
                                        likes={data.likes}
                                        share={data.share}
                                        comments={data.comments} />
                                )
                            }
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default InfoCompany