import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, ScrollShadow } from "@nextui-org/react";
import { faHeart as faHeartNoSolid } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid, faReply } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const CardComment = () => {
    const [isReply, setIsReply] = useState(false);
    const [isLike, setIsLike] = useState(false);

    return (
        <>
            <Card className="border-1 border-slate-300" shadow="none" radius="sm">
                <CardHeader className="justify-between">
                    <div className="flex gap-3">
                        <Avatar radius="full" size="md" src="/avatars/avatar-1.png" />
                        <div className="flex flex-col gap-[2px] items-start justify-center">
                            <span className="text-[16px] font-semibold leading-none text-default-600">Zoey Lang</span>
                            <span className="text-[14px] tracking-tight text-default-400">12 Second Ago</span>
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
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolores dignissimos voluptatem unde assumenda expedita laborum laboriosam nobis eligendi optio ex dolor maiores non, ducimus, tempore velit id! Tenetur deserunt excepturi officia cupiditate in distinctio nihil minima unde temporibus. Dolorum sit distinctio, veritatis maiores fuga exercitationem illo! Omnis neque sint iusto voluptatibus quae possimus dignissimos beatae laudantium illum? Quo, temporibus.
                        </p>
                        <span className="pt-2">
                            #FrontendWithZoey
                            <span className="py-2" aria-label="computer" role="img">
                                💻
                            </span>
                        </span>
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
                            <span className="font-medium text-default-400 text-small">900</span>
                            <p className="text-default-400 text-small">suka</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default CardComment