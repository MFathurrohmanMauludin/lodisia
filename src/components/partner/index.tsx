/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListPartnert } from "../../utils/data"

const Partnert = () => {
    const data = ListPartnert();
    return (
        <div className="pb-24">
            <h2 className="text-center text-4xl font-medium"><span className="font-semibold">Mitra Kami</span></h2>
            <div className="w-full flex justify-center py-8">
                <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-9 w-[70%]">
                    {data.map((data: any) => (
                        <img
                            key={data.id}
                            className={`w-auto ${data.name === 'Kemenkumham' || data.name === 'KEMNAKER' ? "h-[42px]" : "h-[32px]"} hover:saturate-100 object-cover bg-center`}
                            src={data.logo}
                            width={240}
                            height={32}
                            alt={data.name} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partnert