/* eslint-disable @typescript-eslint/no-explicit-any */
import { faHeart, faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, ModalContent, ModalHeader, Avatar, ModalBody, ScrollShadow, Image, Tabs, Tab, Button } from "@nextui-org/react"
import CommentPost from "./CommentPost";
import { useState, useEffect } from "react";

interface Props {
  Open: boolean;
  OpenChange: any;
}

const DetailPost = (getData: Props) => {
  const imgUrl = "https://www.slawipos.com/wp-content/uploads/2023/07/Logo-Tokopedia-2023-hijau.webp";

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  return (
    <>
      <Modal
        isOpen={getData.Open}
        onOpenChange={getData.OpenChange}
        placement="auto"
        size={windowWidth <= 375 ? "full" : "5xl"}
        scrollBehavior={windowWidth <= 350 ? "inside" : "normal"}
      >
        <ModalContent>
          <ModalHeader className="flex flex-row items-center gap-x-4">
            <Avatar radius="full" size={windowWidth <= 350 ? "md" : "lg"} src={imgUrl} />
            <div className="flex flex-col justify-center font-normal">
              <span className="text-[16px] font-semibold leading-none text-default-600">PT Tokopedia</span>
              <span className="text-[14px] tracking-wide text-gray-600" >120.500 Followers</span>
            </div>
          </ModalHeader>
          <ModalBody className="xs:!px-4">
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
                    <ScrollShadow
                      className="sm:h-[150px] md:h-[200px] h-[350px]"
                      isEnabled={false}
                      hideScrollBar>
                      {/* sentence */}
                      <p className="py-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et facilis impedit quaerat. Tenetur asperiores nulla rerum maiores laudantium atque, ullam fugiat illum ex ratione nam amet dolores unde error aliquam incidunt ipsum suscipit possimus velit aperiam accusantium? Dolorem id, sequi ab autem magnam corrupti veniam. Corrupti molestias itaque error ducimus, aliquid laudantium fugit corporis totam dolor iusto ipsum reiciendis quidem sequi eaque nihil! Quisquam odio neque nobis, vitae, labore hic molestias reiciendis ex adipisci recusandae officiis, temporibus id facilis enim dolor ab atque. Enim quam autem adipisci maiores porro quae nihil numquam harum ab. Qui beatae debitis velit voluptatum distinctio ratione voluptas cupiditate, officia animi molestiae? Adipisci veniam quasi quo error, voluptatem quidem dolorem dicta est molestias alias culpa. Molestias, eaque repellendus quidem deleniti autem laudantium neque perferendis rerum cumque voluptatum reiciendis numquam ipsam a soluta doloribus quaerat facere, perspiciatis nihil sit cupiditate veritatis. Tempora consectetur totam error aspernatur a.
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

                    <div className="flex flex-row xs:flex-wrap items-center">
                      <div className="flex flex-row">
                        <Avatar className="object-cover border-2 border-white lg:hover:-translate-y-2 ease-in duration-200" radius="full" size="sm" src={imgUrl} />
                        <Avatar className="z-10 -ml-2 border-2 border-white lg:hover:-translate-y-2 ease-in duration-200" radius="full" size="sm" src={imgUrl} />
                        <Avatar className="z-10 -ml-2 border-2 border-white lg:hover:-translate-y-2 ease-in duration-200" radius="full" size="sm" src={imgUrl} />
                      </div>
                      <p className="ml-2">disukai oleh <span className="font-semibold">sasuke</span> dan <span className="font-semibold">97.156</span> Lainnya</p>
                    </div>
                    <span className="flex justify-end text-[14px] text-gray-600">31 Desember 2023</span>
                  </Tab>

                  <Tab key="comments" title="Komentar">
                    <div className="flex flex-col xs:flex-col-reverse xs:gap-3">
                      <CommentPost />
                    </div>
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