import { ScrollShadow } from "@nextui-org/react"

const Testimony = () => {
    return (
        <div className="px-16">
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-semibold">Apa pendapat mereka tentang kami?</h2>
                    <p className="py-4">
                        <ScrollShadow className="w-auto h-[200px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias libero tempore cum enim architecto ratione est? Ipsam ducimus laudantium voluptatum hic repellat fugit placeat necessitatibus voluptas, suscipit unde! Illo, itaque maxime? Quasi magni inventore, eligendi ea commodi laborum odio laboriosam pariatur dolorem, consequuntur dicta quibusdam assumenda harum deleniti quisquam?
                        </ScrollShadow>
                    </p>
                    <div className="flex items-center gap-x-3">
                        <span className="border-1 border-slate-400 px-4 py-1 rounded-full">Tunarungu</span>
                        <span className="border-1 border-slate-400 px-4 py-1 rounded-full">Tunadaksa</span>
                        <span className="border-1 border-slate-400 px-4 py-1 rounded-full">Tunawicara</span>
                    </div>
                    <div className="flex flex-col mt-4">
                        <h4 className="font-extrabold">Anita Prasmawati</h4>
                        <span>Diterima di PT Shopee International Indonesia</span>
                    </div>
                </div>
                <div className="flex justify-center items-center">

                </div>
            </div>
        </div>
    )
}

export default Testimony