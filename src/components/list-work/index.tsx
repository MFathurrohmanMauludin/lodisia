import CardPosting from "../card-posting"

const WorkList = () => {
    return (
        <div className="px-16 py-8">
            <div className="grid grid-cols-4 grid-flow-row gap-4">
                <CardPosting />
                <CardPosting />
                <CardPosting />
                <CardPosting />
            </div>
        </div>
    )
}

export default WorkList