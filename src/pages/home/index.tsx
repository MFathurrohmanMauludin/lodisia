import Brand from "../../components/brand"
import Hero from "../../components/hero"
import Invitation from "../../components/invitation"
import Opportunity from "../../components/opportunity"
import Testimony from "../../components/testimony"
import TopWork from "../../components/top-work"

const Home = () => {
    return (
        <>
            <Hero />
            <Brand />
            <TopWork />
            <Opportunity />
            <Testimony />
            <Invitation />
            <div>Home</div>
        </>
    )
}

export default Home