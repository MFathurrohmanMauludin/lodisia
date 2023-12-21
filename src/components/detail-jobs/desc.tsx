/* eslint-disable @typescript-eslint/no-explicit-any */

interface Props {
    desc: string;
}

const JobDesc = (getData: Props) => {

    // const parser = new DOMParser();
    // const parsedHTML = parser.parseFromString(getData.desc, 'text/html');
    // const bodyElement = parsedHTML.body;

    return (
        <>
            <div className="py-16 px-16 bg-white -mt-5 rounded-t-[24px]">
                <div className="flex gap-x-4">
                    <div className="flex-shrink">
                        <span className="text-[21px] tracking-wide font-extrabold">Tentang pekerjaan</span>
                        <div className="mt-4" id="job-desc" dangerouslySetInnerHTML={{ __html: getData.desc }} />
                    </div>
                    <div className="flex-shrink-0">
                        <span className="text-[21px] tracking-wide font-extrabold">Pekerjaan Lainnya</span>
                        <p>Sedang proses</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobDesc