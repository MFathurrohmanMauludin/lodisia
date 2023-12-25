/* eslint-disable @typescript-eslint/no-explicit-any */
import AnotherJobs from "../another-job";

interface Props {
    desc: string;
    listJobs: any;
}

const JobDesc = (getData: Props) => {

    return (
        <>
            <div className="py-16 px-16 sm:p-8 bg-white -mt-5 rounded-t-[24px]">
                <div className="flex sm:flex-wrap sm:gap-y-8 gap-x-4">
                    <div className="flex-shrink">
                        <span className="text-[21px] tracking-wide font-extrabold">Tentang pekerjaan</span>
                        <div className="mt-4" id="job-desc" dangerouslySetInnerHTML={{ __html: getData.desc }} />
                    </div>
                    <div className="flex-shrink-0 sm:w-full">
                        <span className="text-[21px] tracking-wide font-extrabold">Pekerjaan Lainnya</span>
                        <div className="gax-y-4">
                            <AnotherJobs listJobs={getData.listJobs} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobDesc