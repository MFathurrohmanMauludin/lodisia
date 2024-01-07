import { faBell, faHeart as faHeartNoSolid, faShareSquare } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Image, Popover, PopoverContent, PopoverTrigger, Snippet, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { ShareFacebook, ShareTelegram, ShareWhatsapp, ShareXTwitter } from "../button/ShareButton";
import DetailPost from "./DetailPost";

const CardPosting = () => {
    const [isFollowed, setIsFollowed] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const imgUrl = "https://www.slawipos.com/wp-content/uploads/2023/07/Logo-Tokopedia-2023-hijau.webp";
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Card className="max-w-[340px] sm:max-w-full border-0">
                {/* head */}
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

                {/* content */}
                <CardBody className="px-3 py-0 text-small text-default-400">

                    {/* description */}
                    <p className="line-clamp-5 text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum laudantium sed quo atque, enim accusamus asperiores incidunt amet consequuntur deleniti repellat vitae adipisci temporibus.
                    </p>

                    {/* tag */}
                    <div className="pt-2 text-[12px] space-x-3 text-gray-700 font-semibold tracking-wide">
                        <a href="#" className="py-2" aria-label="computer" role="img">
                            #FrontendWithZoey
                        </a>
                    </div>

                    {/* detail posts*/}
                    <div className="flex mt-2 gap-x-2">
                        <Button size="lg" onPress={onOpen} radius="sm" isIconOnly>
                            <Image src={imgUrl} className="object-cover object-center w-[50px] h-[50px]" width={50} loading="lazy" radius="sm" />
                        </Button>
                        <DetailPost Open={isOpen} OpenChange={onOpenChange} />
                    </div>
                </CardBody>

                {/* like & share */}
                <CardFooter className="gap-3">
                    <div className="flex flex-row gap-x-1 items-center">
                        <Button
                            size="sm"
                            className="text-gray-600 hover:text-rose-500 hover:!bg-white"
                            variant="light"
                            color="default"
                            onPress={() => setIsLike(!isLike)}
                            startContent={isLike ? <FontAwesomeIcon className="text-rose-500" icon={faHeartSolid} fontSize={16} /> : <FontAwesomeIcon icon={faHeartNoSolid} fontSize={16} />} isIconOnly />
                        <div className="flex gap-1 leading-none">
                            <span className="font-semibold text-default-400 text-small">97.1K</span>
                            <p className="text-default-400 text-small">suka</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-1 items-center">

                        <Popover placement="top-start" showArrow={true}>
                            <PopoverTrigger>
                                <Button
                                    className="text-gray-600 hover:!bg-white"
                                    size="sm"
                                    variant="light"
                                    color="default"
                                    startContent={<FontAwesomeIcon icon={faShareSquare} fontSize={16} />}
                                    isIconOnly />
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className="px-1 py-2">
                                    <div className="text-small font-bold pb-2">Ayo bagikan</div>
                                    <div className="flex justify-center items-center gap-x-4">
                                        <ShareWhatsapp />
                                        <ShareXTwitter />
                                        <ShareFacebook />
                                        <ShareTelegram />
                                    </div>
                                    <Snippet symbol="#" codeString="http://127.0.0.1:5173/detail-perusahaan?name=PT%20Tokopedia" className="mt-2 w-full" size="sm">Salin tautan ini</Snippet>
                                </div>
                            </PopoverContent>
                        </Popover>
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