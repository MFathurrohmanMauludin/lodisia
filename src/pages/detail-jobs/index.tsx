/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { CompanyList } from "../../utils/data";
import InfoJob from "../../components/detail-job";

interface Props {

}

interface State {
    companyList: any;
}

class DetailJobs extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {
            companyList: CompanyList(),
        }
    }

    render() {
        return (
            <>
                <InfoJob data={this.state.companyList.flatMap((data: any) => data.jobs)} />
            </>
        )
    }
}

export default DetailJobs