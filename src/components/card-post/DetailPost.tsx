/* eslint-disable @typescript-eslint/no-explicit-any */
import { faHeart, faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, ModalContent, ModalHeader, Avatar, ModalBody, ScrollShadow, Image, Tabs, Tab, Button } from "@nextui-org/react"
import CommentPost from "./CommentPost";

interface Props {
  Open: boolean;
  OpenChange: any;
}

const DetailPost = (getData: Props) => {
  const imgUrl = "https://www.slawipos.com/wp-content/uploads/2023/07/Logo-Tokopedia-2023-hijau.webp";

  return (
    <>
      <Modal
        isOpen={getData.Open}
        placement="auto"
        onOpenChange={getData.OpenChange}
        size="5xl"
      >
        <ModalContent>
          <ModalHeader className="flex flex-row items-center gap-x-4">
            <Avatar radius="full" size="lg" src={imgUrl} />
            <div className="flex flex-col justify-center font-normal">
              <span className="text-[16px] font-semibold leading-none text-default-600">PT Tokopedia</span>
              <span className="text-[14px] tracking-wide text-gray-600" >120.500 Followers</span>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 pb-2">
              {/* left content */}
              <Image
                src={imgUrl}
                className="w-[100%] max-w-[512px] sm:h-[175px] md:h-[350px] h-[500px] bg-gray-800 object-contain object-center"
                width={500}
                height={500}
                loading="lazy"
              />

              {/* right content */}
              <div className="flex flex-col">
                <Tabs aria-label="opsi">
                  <Tab className="!py-0" key="description" title="Deskripsi">

                    {/* description */}
                    <ScrollShadow className="sm:h-[150px] md:h-[200px] h-[350px]">
                      {/* sentence */}
                      <p className="py-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab aperiam perferendis ducimus ex dolor, veniam ullam inventore accusamus quisquam tempora!
                      </p>

                      {/* tags */}
                      <div className="space-x-2">
                        <a
                          href="#"
                          className="font-semibold">#Indonesia_Maju</a>
                      </div>
                    </ScrollShadow>

                    <div className="flex flex-row space-x-3 py-2">
                      <div className="flex items-center space-x-1">
                        <Button variant="light" color="default" startContent={<FontAwesomeIcon fontSize={24} icon={faHeart} />} isIconOnly />
                        <span>97.1K Suka</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Button variant="light" color="default" startContent={<FontAwesomeIcon fontSize={21} icon={faShareFromSquare} />} isIconOnly />
                        <span>1K dibagikan</span>
                      </div>
                    </div>

                    <div className="flex flex-row items-center">
                      <Avatar className="border-2 border-white hover:-translate-y-2 ease-in duration-200" radius="full" size="sm" src={imgUrl} />
                      <Avatar className="z-10 -ml-2 border-2 border-white hover:-translate-y-2 ease-in duration-200" radius="full" size="sm" src={imgUrl} />
                      <Avatar className="z-10 -ml-2 border-2 border-white hover:-translate-y-2 ease-in duration-200" radius="full" size="sm" src={imgUrl} />
                      <p className="ml-2">disukai oleh <span className="font-semibold">sasuke</span> dan <span className="font-semibold">97.156</span> Lainnya</p>
                    </div>
                    <span className="flex justify-end text-[14px] text-gray-600">31 Desember 2023</span>
                  </Tab>

                  <Tab key="comments" title="Komentar">
                    <CommentPost />
                  </Tab>

                </Tabs>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DetailPost