import { faBell, faHeart, faShareSquare } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react"
import { useState } from "react";

const CardPosting = () => {
    const [isFollowed, setIsFollowed] = useState(false);
    const imgUrl = "https://www.slawipos.com/wp-content/uploads/2023/07/Logo-Tokopedia-2023-hijau.webp";

    return (
        <>
            <Card className="max-w-[340px] border-0">
                <CardHeader className="justify-between">
                    <div className="flex gap-4">
                        <Avatar radius="full" size="lg" src={imgUrl} />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <span className="text-[14px] font-semibold leading-none text-default-600">PT Tokopedia</span>
                            <span className="text-[12px] tracking-tight text-default-400" >120.560 Followers</span>
                        </div>
                    </div>
                    <Button
                        className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                        color="primary"
                        radius="full"
                        size="sm"
                        variant={isFollowed ? "bordered" : "solid"}
                        onPress={() => setIsFollowed(!isFollowed)}
                        startContent={isFollowed ?
                            <FontAwesomeIcon icon={faBell} /> :
                            <FontAwesomeIcon icon={faPlus} />
                        }
                    >
                        {isFollowed ? "Followed" : "Follow"}
                    </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                    <p className="line-clamp-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum laudantium sed quo atque, enim accusamus asperiores incidunt amet consequuntur deleniti repellat vitae adipisci temporibus.
                    </p>
                    <span className="pt-2 space-x-3">
                        <span className="py-2" aria-label="computer" role="img">
                            #FrontendWithZoey 💻
                        </span>
                    </span>
                    <div className="flex mt-2 gap-x-2">
                        <Image src={imgUrl} className="object-cover w-[50px] h-[50px]" width={50} loading="lazy" radius="sm" />
                        <Image src={imgUrl} className="object-cover w-[50px] h-[50px]" width={50} loading="lazy" radius="sm" />
                        <Image src={imgUrl} className="object-cover w-[50px] h-[50px]" width={50} loading="lazy" radius="sm" />
                    </div>
                </CardBody>
                <CardFooter className="gap-3">
                    <div className="flex flex-row gap-x-1 items-center">
                        <Button size="sm" className="text-gray-600" variant="light" color="default" startContent={<FontAwesomeIcon icon={faHeart} fontSize={16} />} isIconOnly />
                        <div className="flex gap-1 leading-none">
                            <span className="font-semibold text-default-400 text-small">97.1K</span>
                            <p className="text-default-400 text-small">suka</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-1 items-center">
                        <Button className="text-gray-600" size="sm" variant="light" color="default" startContent={<FontAwesomeIcon icon={faShareSquare} fontSize={16} />} isIconOnly />
                        <div className="flex gap-1 leading-none">
                            <span className="font-semibold text-default-400 text-small">1K</span>
                            <p className="text-default-400 text-small">dibagikan</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default CardPosting