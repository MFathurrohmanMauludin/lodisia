/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { CompanyList } from "../../utils/data";
import SearchField from "../../components/search";
import CompanyCard from "../../components/card-company";
import HeadLine from "../../components/title";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {

}

interface State {
    companyData: any;
}

class Company extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {
            companyData: CompanyList(),
        }
    }

    render() {
        return (
            <>
                <SearchField select={{
                    workSelect: false,
                    styleSelect: false,
                    experienceSelect: false,
                    sectorSelect: true,
                    locationSelect: true,
                }} />
                <div className="pb-16 px-16 sm:!px-4 ">
                    <HeadLine headLine={'Daftar Perusahaan Terkini'} />
                    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                        {
                            this.state.companyData.map((data: any) => (
                                <CompanyCard key={data.id} id={data.id} name={data.name} banner={data.banner} logo={data.logo} job={data.jobs} post={data.posts} about={data.about} />
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Company