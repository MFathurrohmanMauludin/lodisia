/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { CompanyList } from "../../utils/data";
import SearchField from "../../components/search";
import CompanyCard from "../../components/card-company";

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
                <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:py-0 sm:px-4 lg:grid-cols-3 gap-4 py-8 px-16">
                    {
                        this.state.companyData.map((data: any) => (
                            <CompanyCard key={data.id} id={data.id} name={data.name} banner={data.banner} logo={data.logo} job={data.jobs} post={data.posts} about={data.about} />
                        ))
                    }
                </div>
            </>
        )
    }
}

export default Company