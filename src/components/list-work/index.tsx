/* eslint-disable @typescript-eslint/no-explicit-any */
import CardPosting from "../card-posting"

interface Props {
    work: any;
}

const WorkList = (getData: Props) => {
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
                            typeContract={data.typeContract} />
                    ))
                }
            </div>
        </div>
    )
}

export default WorkList