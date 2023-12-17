import { Button } from "@nextui-org/react"

const Invitation = () => {
    return (
        <div className="py-36 px-16 sm:px-4">
            <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-y-8 shadow-lg shadow-slate-950/10 px-4 py-16 rounded-2xl">
                <div className="flex items-center">
                    <h1 className="text-3xl font-semibold tracking-wider px-8">Apakah kamu siap untuk mencari pekerjaan impianmu sekarang?</h1>
                </div>
                <div className="flex justify-center items-center gap-x-4">
                    <Button variant="solid" color="primary" size="lg">Ayo Cari Sekarang</Button>
                    <Button variant="bordered" color="primary" size="lg">Hubungi Kami</Button>
                </div>
            </div>
        </div>
    )
}

export default Invitation