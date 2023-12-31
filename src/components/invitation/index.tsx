import { Button, Link } from "@nextui-org/react"

const Invitation = () => {
    return (
        <div className="py-36 px-16 sm:px-4">
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 md:gap-y-8 sm:gap-y-8 shadow-lg shadow-slate-950/10 px-4 py-16 rounded-2xl">
                <div className="flex items-center">
                    <h1 className="text-3xl font-semibold tracking-wider px-8">Apakah kamu siap untuk mencari pekerjaan impianmu sekarang?</h1>
                </div>
                <div className="flex justify-center items-center gap-x-4">
                    <Button
                        href="/cari-pekerjaan"
                        as={Link}
                        variant="solid"
                        color="primary"
                        size="lg"
                        radius="full">Ayo Cari Sekarang</Button>
                    <Button
                        variant="bordered"
                        color="primary"
                        size="lg"
                        radius="full">Hubungi Kami</Button>
                </div>
            </div>
        </div>
    )
}

export default Invitation