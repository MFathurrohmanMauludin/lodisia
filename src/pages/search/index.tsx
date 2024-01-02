import React from "react";
import { CompanyList } from "../../utils/data";
import JobList from "../../components/list-work";
import SearchField from "../../components/search";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {

}

interface State {
    workData: any;
    filterData: any;
}

class SearchPage extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {
            workData: CompanyList(),
            filterData: [],
        }
    }

    filterJobsWithSearch = (event: any) => {
        const workData = this.state.workData.flatMap((data: any) => data.jobs);
        const getData = workData.filter((job: any) => job.name.toLowerCase().includes(event.target.value));
        this.setState({ filterData: getData });
    }

    render() {

        return (
            <>
                <SearchField select={{
                    workSelect: true,
                    sectorSelect: false,
                    styleSelect: true,
                    locationSelect: true,
                    experienceSelect: true
                }}
                    control={this.filterJobsWithSearch}
                />
                <div className="px-16 pb-16 md:px-4 sm:px-4">
                    <JobList jobs={this.state.filterData.length <= 0 ? this.state.workData.flatMap((data: any) => data.jobs)
                        : this.state.filterData} headLine={"Lowongan Tersedia"} />
                </div>

            </>
        )
    }
}

export default SearchPage