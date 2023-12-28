/* eslint-disable @typescript-eslint/no-explicit-any */
import { faInstagram, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Link } from "@nextui-org/react";
import InfoCompany from "../../components/detail-company";
// import { CompanyList } from "../../utils/data";
import { useLocation } from "react-router-dom";

const DetailCompany = () => {
    const location = useLocation();
    const { search } = location;
    const imgUrl = "https://www.slawipos.com/wp-content/uploads/2023/07/Logo-Tokopedia-2023-hijau.webp";

    // const filter = CompanyList().filter((data: any) => data.)

    console.log(search);

    return (
        <>
            <div className="flex pt-8 pb-32">
                <div className="flex-shrink-0 flex flex-col items-center px-16 border-r-1">
                    <Avatar className="w-24 h-24" src={imgUrl} showFallback name="PNG" />
                    <span className="font-semibold text-lg text-slate-700 mt-2">PT Tokopedia</span>
                    <div className="space-x-4">
                        <Button href="#" as={Link} isIconOnly startContent={<FontAwesomeIcon fontSize={24} icon={faInstagram} />} variant="light" color="default" />
                        <Button href="#" as={Link} isIconOnly startContent={<FontAwesomeIcon fontSize={24} icon={faTiktok} />} variant="light" color="default" />
                        <Button href="#" as={Link} isIconOnly startContent={<FontAwesomeIcon fontSize={24} icon={faXTwitter} />} variant="light" color="default" />
                        <Button href="#" as={Link} isIconOnly startContent={<FontAwesomeIcon fontSize={24} icon={faYoutube} />} variant="light" color="default" />
                    </div>
                </div>
                <div className="flex-shrink px-4">
                    <InfoCompany
                        company={undefined}
                        jobs={undefined}
                        posts={undefined}
                        detail={{
                            about: "",
                            location: "",
                            name: "",
                            operation: "",
                            sector: "",
                            socmed: undefined,
                            url: "",
                            ceo: ""
                        }} />
                    <div className="flex flex-row pt-4">
                        <span className="text-[18px] font-semibold">Perusahaan Lainnya</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailCompany