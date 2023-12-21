/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ListWork } from "../../utils/data";
import InfoJob from "../../components/detail-job";

interface Props {

}

interface State {
    workList: any;
}

class DetailJobs extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {
            workList: ListWork(),
        }
    }

    render() {
        return (
            <>
                <InfoJob data={this.state.workList} />
            </>
        )
    }
}

export default DetailJobs