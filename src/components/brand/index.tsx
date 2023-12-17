/* eslint-disable @typescript-eslint/no-explicit-any */
import { CompanyBrand } from "../../utils/data"

const Brand = () => {
    const data = CompanyBrand();
    return (
        <div className="py-16" tabIndex={0}>
            <h2 className="text-center text-2xl"><span className="font-semibold">35.000+</span> Pekerja disabilitas telah diterima di perusahaan raksasa dunia melalui kami</h2>
            <div className="w-full flex justify-center py-8">
                <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-9 w-[70%]">
                    {data.map((data: any) => (
                        <img
                            key={data.id}
                            className="w-auto h-[32px] hover:saturate-100 object-cover bg-center"
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

export default Brand