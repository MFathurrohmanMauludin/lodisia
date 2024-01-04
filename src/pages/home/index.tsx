/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import Brand from "../../components/brand"
import Hero from "../../components/hero"
import Invitation from "../../components/invitation"
import Opportunity from "../../components/opportunity"
import Partnert from "../../components/partner"
import Testimony from "../../components/testimony"
import TopWork from "../../components/top-work"
import { CompanyList, ListTestimony } from "../../utils/data"
import JobList from "../../components/list-work"


interface Props {

}

interface State {
    companyList: any;
    testimony: any;
    testimonyActive: any;
    counter: number;
}

class Home extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {
            companyList: CompanyList(),
            testimony: ListTestimony(),
            testimonyActive: '',
            counter: 0,
        }
    }

    componentDidMount(): void {
        this.nextStory
    }

    componentWillUnmount(): void {
        setInterval(this.nextStory, 10000)
    }

    prevStory = () => {
        this.setState({ counter: this.state.counter === 0 ? 2 : this.state.counter - 1 });
    }

    nextStory = () => {
        this.setState({ counter: this.state.counter === 2 ? 0 : this.state.counter + 1 });
    }

    getIdStory = (id: any) => {
        this.setState({ counter: id })
    }

    render() {
        const getCounter = this.state.counter;
        const data = this.state.testimony[getCounter];
        const jobs = this.state.companyList.flatMap((data: any) => data.jobs)

        return (
            <>
                <Hero />
                <Brand />
                <TopWork />
                <div className="px-16 pt-16 sm:px-4">
                    <JobList jobs={jobs} headLine={"Lowongan Kerja Terbaru"} />
                </div>
                <Opportunity />
                <Testimony
                    id={this.state.counter}
                    username={data.username}
                    company={data.company}
                    profecy={data.profecy}
                    photo={data.photo}
                    story={data.story}
                    disability={data.disability}
                    dataPointer={this.state.testimony}
                    control={{
                        nextContent: this.nextStory,
                        prevContent: this.prevStory,
                        pointerContent: this.getIdStory
                    }}
                />
                <Invitation />
                <Partnert />
            </>
        )
    }

}

export default Home