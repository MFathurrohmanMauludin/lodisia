import { faBell, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"
import { useState } from "react";

const CardPosting = () => {
    const [isFollowed, setIsFollowed] = useState(false);

    return (
        <>
            <Card className="max-w-[340px] border-0">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
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
                <CardBody className="px-3 py-0 text-small text-default-400 overflow-y-hidden">
                    <p>
                        Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                    </p>
                    <span className="pt-2">
                        #FrontendWithZoey
                        <span className="py-2" aria-label="computer" role="img">
                            💻
                        </span>
                    </span>
                </CardBody>
                <CardFooter className="gap-3">
                    <div className="flex flex-row gap-x-1 items-center">
                        <Button size="sm" variant="light" color="default" startContent={<FontAwesomeIcon icon={faHeart} fontSize={16} />} isIconOnly />
                        <div className="flex gap-1 leading-none">
                            <span className="font-semibold text-default-400 text-small">97.1K</span>
                            <p className="text-default-400 text-small">suka</p>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">1K</p>
                        <p className=" text-default-400 text-small">dibagikan</p>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default CardPosting