/* eslint-disable @typescript-eslint/no-explicit-any */
import * as icons from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardBody } from "@nextui-org/react"
import { PopularFieldWork } from "../../utils/data"

const TopWork = () => {
    const getData = PopularFieldWork();
    const iconRegular: any = icons;

    return (
        <div className="w-full px-16">
            <h2 className="text-xl font-semibold">Bidang Pekerjaan Popular</h2>
            <div className="flex flex-wrap gap-x-8 py-4">
                {
                    getData.map((data) => (
                        <Card className="shadow-lg shadow-stone-400/30 hover:-translate-y-4 focus-within:-translate-y-4" shadow="sm" radius="none" key={data.id} isPressable>
                            <CardBody className="flex flex-row gap-4 items-center overflow-visible p-4">
                                <FontAwesomeIcon size="lg" icon={iconRegular[data.icon]} /> <span>{data.name}</span>
                            </CardBody>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default TopWork