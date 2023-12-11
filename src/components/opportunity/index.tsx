/* eslint-disable @typescript-eslint/no-explicit-any */
import * as icon from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardBody } from "@nextui-org/react"
import { Oppurtunity } from "../../utils/data"

const Opportunity = () => {
    const getData = Oppurtunity();
    const getIcon: any = icon;


    return (
        <div className="py-36 px-16">
            <div className="flex">
                <div className="flex flex-col grow gap-y-4 mr-8">
                    <h2 className="text-3xl font-extrabold">Apa yang anda dapatkan dari kami?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis neque impedit hic doloribus voluptatem nisi mollitia!</p>
                </div>
                <div className="grid grid-cols-2 grid-flow-row gap-4 grow-0">
                    {
                        getData.map((data: any) => (
                            <Card className="hover:drop-shadow-md shadow-slate-950/10" shadow="none" radius="sm" key={1} isPressable>
                                <CardBody className="flex flex-col overflow-visible p-4">
                                    <div className="flex justify-center py-[13px] px-[12px] border border-slate-500 max-w-max h-max rounded-full">
                                        <FontAwesomeIcon icon={getIcon[data.icon]} />
                                    </div>
                                    <div className="pt-4">
                                        <h4 className="font-semibold text-[21px]">{data.title}</h4>
                                        <p className="mt-1">{data.description}</p>
                                    </div>
                                </CardBody>
                            </Card>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Opportunity