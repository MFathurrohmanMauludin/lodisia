/* eslint-disable @typescript-eslint/no-explicit-any */
import { CompanyBrand } from "../../utils/data"

const Brand = () => {
    const data = CompanyBrand();
    return (
        <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-16">
            {
                data.map((data: any) => (
                    <img
                        key={data.name}
                        src={data.logo}
                        className="w-auto h-[32px] saturate-0 object-cover bg-center"
                        width={240}
                        height={32}
                        alt=""
                    />
                ))
            }
        </div>
    )
}

export default Brand