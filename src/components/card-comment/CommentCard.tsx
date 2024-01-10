/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, ScrollShadow } from "@nextui-org/react";
import { faHeart as faHeartNoSolid } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid, faReply } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Props {
    id: any;
    name: string;
    imgUrl: string;
    content: any;
    likes: any;
    createdAt: any;
}

const CommentCard = (getData: Props) => {
    const [isReply, setIsReply] = useState(false);
    const [isLike, setIsLike] = useState(false);

    return (
        <>
            <Card className="border-1 border-slate-300" shadow="none" radius="sm">
                <CardHeader className="justify-between">
                    <div className="flex gap-3">
                        <Avatar className="!object-cover" radius="full" size="md" src={getData.imgUrl} />
                        <div className="flex flex-col gap-[2px] items-start justify-center">
                            <span className="text-[16px] font-semibold leading-none text-default-600">{getData.name}</span>
                            <span className="text-[14px] tracking-tight text-default-400">{getData.createdAt}</span>
                        </div>
                    </div>
                    <Button
                        className={isReply ? "bg-transparent text-foreground border-default-200" : ""}
                        color="primary"
                        radius="full"
                        size="sm"
                        variant={isReply ? "bordered" : "solid"}
                        onPress={() => setIsReply(!isReply)}
                        startContent={isReply ? <></> : <FontAwesomeIcon icon={faReply} />}
                    >
                        {isReply ? "Replied" : "Reply"}
                    </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-gray-700">
                    <ScrollShadow
                        className="h-[100px]"
                        hideScrollBar
                        isEnabled={false}
                    >
                        <p>{getData.content}</p>
                    </ScrollShadow>
                </CardBody>
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
                            <span className="font-medium text-default-400 text-small">{getData.likes.length}</span>
                            <p className="text-default-400 text-small">suka</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default CommentCard