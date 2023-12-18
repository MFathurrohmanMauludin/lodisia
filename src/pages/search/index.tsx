import React from "react";
import { ListWork } from "../../utils/data";
import WorkList from "../../components/list-work";
import SearchField from "../../components/search";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {

}

interface State {
    workData: any;
}

class SearchPage extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {
            workData: ListWork(),
        }
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
                }} />
                <div className="px-16 pb-16 sm:px-4">
                    <WorkList work={this.state.workData} headLine={"Lowongan Tersedia"} />
                </div>
            </>
        )
    }
}

export default SearchPage