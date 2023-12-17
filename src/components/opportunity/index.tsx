/* eslint-disable @typescript-eslint/no-explicit-any */
import * as icon from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardBody } from "@nextui-org/react"
import { Oppurtunity } from "../../utils/data"

const Opportunity = () => {
    const getData = Oppurtunity();
    const getIcon: any = icon;


    return (
        <div className="py-36 px-16 sm:px-4">
            <div className="flex md:flex-wrap md:gap-y-8 md:flex-row">
                <div className="flex flex-col grow-0 w-[100%] pe-4 mt-3 gap-y-4">
                    <h2 className="text-3xl font-extrabold">Apa yang anda dapatkan dari kami?</h2>
                    <p>Kami berikan beberapa keuntungan dari platform ini yang belum pernah anda dapatkan di dalam hidup anda.</p>
                </div>
                <div className="grow">
                    <div className="grid grid-cols-2 sm:grid-cols-1 grid-flow-row gap-4">
                        {
                            getData.map((data: any) => (
                                <Card className="hover:drop-shadow-md shadow-slate-950/10" shadow="none" radius="sm" key={data.id} isPressable>
                                    <CardBody className="flex flex-col overflow-visible p-4">
                                        <div className="flex justify-center items-center p-4 border border-slate-500 max-w-[48px] max-h-[48px] rounded-md">
                                            <FontAwesomeIcon fontSize={24} icon={getIcon[data.icon]} />
                                        </div>
                                        <div className="pt-4">
                                            <span className="font-semibold text-[21px] capitalize">{data.title}</span>
                                            <p className="mt-1">{data.description}</p>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Opportunity