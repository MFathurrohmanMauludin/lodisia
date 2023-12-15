/* eslint-disable @typescript-eslint/no-explicit-any */
import CardPosting from "../card-posting"

interface Props {
    work: any;
}

const WorkList = (getData: Props) => {
    const dayDate = (data: number) => new Date(data).getDate();
    const finishDate = (data: number) => new Date(data).toLocaleDateString('id', { month: 'long', year: 'numeric' });

    const countDay = (finish: number) => Math.ceil((new Date(finish).getTime() - new Date().getTime()) / ((1000 * 3600) * 24));


    return (
        <div className="px-16 py-24">
            <div className="grid lg:grid-cols-2 grid-cols-3 grid-flow-row gap-4">
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
        </div>
    )
}

export default WorkList