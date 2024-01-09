/* eslint-disable @typescript-eslint/no-explicit-any */
import { faBell, faHeart as faHeartNoSolid, faShareSquare } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Image, Popover, PopoverContent, PopoverTrigger, Snippet, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { ShareFacebook, ShareTelegram, ShareWhatsapp, ShareXTwitter } from "../button/ShareButton";
import DetailPost from "./DetailPost";

interface Props {
    id: any;
    company: string;
    followers: any;
    imgCompany: any;
    imgPost: any;
    content: string;
    tag: any;
    likes: any;
    share: any;
}

const CardPosting = (getData: Props) => {
    // like or likes
    const [isFollowed, setIsFollowed] = useState(false);
    const [isLike, setIsLike] = useState(false);

    // open modal
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // count convert
    const countConvert = (count: number) => {
        if (count >= 1000) {
            return `${count / 1000}K`
        } else if (count >= 1000000) {
            return `${count / 1000}M`
        } else {
            return count
        }
    }

    return (
        <>
            <Card className="max-w-[340px] sm:max-w-full border-0">
                {/* head */}
                <CardHeader className="justify-between">
                    <div className="flex gap-4">
                        <Avatar radius="full" size="md" src={getData.imgCompany} />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <span className="text-[14px] font-semibold leading-none text-default-600">{getData.company}</span>
                            <span className="text-[12px] tracking-tight text-default-400" >{getData.followers.length} Followers</span>
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
                    <div
                        className="line-clamp-5 text-gray-700"
                        dangerouslySetInnerHTML={{ __html: getData.content }} />

                    {/* tag */}
                    <div className="pt-2 text-[12px] space-x-3 text-gray-700 font-semibold tracking-wide">
                        {
                            getData.tag.map((data: any) =>
                                <a href={data.link} className="py-2" aria-label={data.name}>#{data.name}
                                </a>
                            )
                        }
                    </div>

                    {/* detail posts*/}
                    <div className="flex mt-2 gap-x-2">
                        {getData.imgPost.map((data: any) =>
                            <Button
                                id={data.id}
                                size="lg"
                                onPress={onOpen}
                                radius="sm"
                                isIconOnly>
                                <Image
                                    src={data.url}
                                    className="object-cover object-center w-[50px] h-[50px]" width={50}
                                    loading="lazy"
                                    radius="sm" />
                            </Button>
                        )}
                        <DetailPost
                            Open={isOpen}
                            OpenChange={onOpenChange}
                            desc={getData.content}
                            tag={getData.tag} />
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
                            <span className="font-semibold text-gray-500 text-small">
                                {countConvert(getData.likes.length)}
                            </span>
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
                        <div className="flex flex-wrap gap-1 leading-none">
                            <span className="font-semibold text-gray-500 text-small">
                                {countConvert(getData.share)}
                            </span>
                            <p className="text-default-400 text-small">dibagikan</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default CardPosting