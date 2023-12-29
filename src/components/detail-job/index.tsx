/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";
import BannerJobs from "./banner";
import DisqusComponent from "../disqus";

interface Props {
    data: any;
}

const InfoJob = (getData: Props) => {
    const location = useLocation();
    const { search } = location;

    // regex
    const regexCompany = /(?:\?|&)company=([^&?]+)/;
    const regexId = /(?:\?|&)id=([^&?]+)/;

    // get company name & id work
    const matchCompany = search.match(regexCompany);
    const company = matchCompany ? decodeURIComponent(matchCompany[1]).replace(/\+/g, ' ') : ' ';

    const matchId = regexId.exec(search);
    const getId = matchId ? matchId[1] : 0;

    const filterData = getData.data.filter((job: any) => job.id === parseInt(`${getId}`) && job.company === company);
    console.log(filterData);

    return (
        <>
            <BannerJobs
                data={filterData[0]} anotherJobs={getData.data} />
            <DisqusComponent />
        </>
    )
}

export default InfoJob