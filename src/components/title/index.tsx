/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
    headLine: any;
}

const HeadLine = (getData: Props) => {
    return (
        <>
            <h2 className="py-4 text-xl font-semibold">{getData.headLine}</h2>
        </>
    )
}

export default HeadLine