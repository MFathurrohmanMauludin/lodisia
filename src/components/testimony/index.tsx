import { ScrollShadow } from "@nextui-org/react"
import imageWoman from "../../assets/woman-disability-works.png"

const Testimony = () => {
    return (
        <div className="px-16">
            <div className="grid grid-cols-2">
                {/* testimony */}
                <div className="flex flex-col">
                    <h2 className="text-3xl font-semibold">Apa pendapat mereka tentang kami?</h2>
                    <p className="py-4 pr-8">
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

                {/* photo */}
                <div className="flex flex-col justify-center items-center">
                    <div className="relative overflow-hidden pt-16 px-10">
                        <div className="static flex justify-center">
                            <img className="ml-20 bg-center object-cover z-10" src={imageWoman} width={500} height={300} alt="photo testimony" />
                            <div className="absolute top-[75px] z-0 rotate-45 bg-slate-300/30 w-[240px] h-[240px] inline-block rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony