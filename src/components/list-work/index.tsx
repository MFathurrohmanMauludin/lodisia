import CardPosting from "../card-posting"

const WorkList = () => {
    return (
        <div className="px-16 py-24">
            <div className="grid lg:grid-cols-2 grid-cols-3 grid-flow-row gap-4">
                <CardPosting />
                <CardPosting />
                <CardPosting />
                <CardPosting />
            </div>
        </div>
    )
}

export default WorkList