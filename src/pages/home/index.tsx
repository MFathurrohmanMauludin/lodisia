/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import Brand from "../../components/brand"
import Hero from "../../components/hero"
import Invitation from "../../components/invitation"
import Opportunity from "../../components/opportunity"
import Partnert from "../../components/partner"
import Testimony from "../../components/testimony"
import TopWork from "../../components/top-work"
import { ListTestimony } from "../../utils/data"

interface Props {

}

interface State {
    testimony: any;
    testimonyActive: any;
    counter: number;
}

class Home extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {
            testimony: ListTestimony(),
            testimonyActive: '',
            counter: 0,
        }

        setInterval(this.nextStory, 10000);
    }

    prevStory = () => {
        this.setState({ counter: this.state.counter === 0 ? 2 : this.state.counter - 1 });
    }

    nextStory = () => {
        this.setState({ counter: this.state.counter === 2 ? 0 : this.state.counter + 1 });
    }

    render() {
        const getCounter = this.state.counter;
        const data = this.state.testimony[getCounter];

        return (
            <>
                <Hero />
                <Brand />
                <TopWork />
                <Opportunity />
                <Testimony
                    id={data.id}
                    username={data.username}
                    company={data.company}
                    profecy={data.profecy}
                    photo={data.photo}
                    story={data.story}
                    disability={data.disability}
                    control={{
                        nextContent: this.nextStory,
                        prevContent: this.prevStory
                    }}
                />
                <Invitation />
                <Partnert />
            </>
        )
    }

}

export default Home