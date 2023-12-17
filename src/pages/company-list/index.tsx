/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { CompanyList } from "../../utils/data";
import SearchField from "../../components/search";
import CompanyCard from "../../components/card-compay";

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
                <SearchField />
                <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-16">
                    {
                        this.state.companyData.map((data: any) => (
                            <CompanyCard id={data.id} name={data.name} banner={data.banner} logo={data.logo} job={data.jobs} post={data.posts} about={data.about} />
                        ))
                    }
                </div>
            </>
        )
    }
}

export default Company