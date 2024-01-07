/* eslint-disable @typescript-eslint/no-explicit-any */
import { faInstagram, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Link } from "@nextui-org/react";
import InfoCompany from "../../components/detail-company";
import { CompanyList } from "../../utils/data";
import { useLocation } from "react-router-dom";
import CompanyCard from "../../components/card-company";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const DetailCompany = () => {
    const location = useLocation();
    const { search } = location;

    // info company 
    const regexCompany = /(?:\?)name=([^&?]+)/;
    const matchCompany = search.match(regexCompany);
    const company = matchCompany ? decodeURIComponent(matchCompany[1]).replace(/\+/g, ' ') : ' ';

    const companyList = CompanyList();

    const detailCompany = companyList.filter((data: any) => data.name === company)[0];

    // another company
    const anotherCompany = companyList.filter((data: any) => data.name !== company);

    return (
        <>
            {/* right content */}
            <div className="flex sm:flex-wrap md:flex-wrap sm:justify-center md:justify-center pt-8 pb-32">
                <div className="flex-shrink-0 sm:flex-shrink flex flex-col items-center px-8 md:border-0 lg:border-r-1 py-4 w-[100%] max-w-[300px]">
                    <Avatar className="w-24 h-24" src={detailCompany.logo} showFallback name="PNG" />

                    {/* follow */}
                    <div className="flex flex-row items-center gap-x-4 my-4" tabIndex={0}>
                        <div className="flex flex-col">
                            <span className="font-semibold tracking-wide text-[16px] text-slate-700">{detailCompany.name}
                            </span>
                            <span className="text-[12px]">120K Followers</span>
                        </div>

                        <Button variant="solid" size="sm" color="primary" radius="full" startContent={<FontAwesomeIcon icon={faPlus} />}>Follow</Button>
                    </div>

                    {/* social media */}
                    <div className="space-x-4">
                        <Button href={detailCompany.socmed.instagram} as={Link} isIconOnly startContent={<FontAwesomeIcon fontSize={24} icon={faInstagram} />} variant="light" color="default" />
                        <Button href={detailCompany.socmed.tiktok} as={Link} isIconOnly startContent={<FontAwesomeIcon fontSize={24} icon={faTiktok} />} variant="light" color="default" />
                        <Button href={detailCompany.socmed.twitter} as={Link} isIconOnly startContent={<FontAwesomeIcon fontSize={24} icon={faXTwitter} />} variant="light" color="default" />
                        <Button href={detailCompany.socmed.youtube} as={Link} isIconOnly startContent={<FontAwesomeIcon fontSize={24} icon={faYoutube} />} variant="light" color="default" />
                    </div>
                </div>

                {/* left content */}
                <div className="flex-shrink px-4">
                    <InfoCompany
                        company={detailCompany.name}
                        jobs={detailCompany.jobs}
                        posts={detailCompany.posts}
                        detail={{
                            about: `${detailCompany.about}`,
                            location: `${detailCompany.location}`,
                            name: `${detailCompany.name}`,
                            operation: `${detailCompany.operation} - Sekarang`,
                            sector: `${detailCompany.sector}`,
                            url: `${detailCompany.url}`,
                            ceo: `${detailCompany.ceo}`
                        }} />
                    <div className="flex flex-col pt-4">
                        <span className="text-[18px] font-semibold">Perusahaan Lainnya</span>
                        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4 mt-4">
                            {
                                anotherCompany.map((getData: any) => (

                                    <CompanyCard
                                        id={getData.id}
                                        name={getData.name}
                                        banner={getData.banner}
                                        logo={getData.logo}
                                        job={getData.jobs.length}
                                        post={getData.posts}
                                        about={getData.about}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailCompany