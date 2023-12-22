import React from "react";
import { ListWork } from "../../utils/data";
import WorkList from "../../components/list-work";
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
            workData: ListWork(),
            filterData: [],
        }
    }

    filterJobsWithSearch = (event: any) => {
        const getData = this.state.workData.filter((data: any) => data.name.toLowerCase().includes(event.target.value));
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
                    <WorkList work={this.state.filterData.length <= 0 ? this.state.workData : this.state.filterData} headLine={"Lowongan Tersedia"} />
                </div>

            </>
        )
    }
}

export default SearchPage