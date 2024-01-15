/* eslint-disable @typescript-eslint/no-explicit-any */
import { faHeart, faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, ModalContent, ModalHeader, Avatar, ModalBody, ScrollShadow, Image, Tabs, Tab, Button } from "@nextui-org/react"
import CommentPost from "./CommentPost";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  Open: boolean;
  OpenChange: any;
  company: string;
  logo: string;
  imgPost: any;
  followers: any;
  likes: any;
  share: any;
  desc: string;
  tag: any;
  date: any;
  comments: any;
}

const DetailPost = (getData: Props) => {
  // slider
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <Button variant="solid" color="default" size="md" radius="full" startContent={<FontAwesomeIcon className="!text-white" fontSize={16} icon={faChevronRight} />} isIconOnly />,
    prevArrow: <Button variant="solid" color="default" size="md" radius="full" startContent={<FontAwesomeIcon className="!text-white" fontSize={16} icon={faChevronLeft} />} isIconOnly />,
  };

  // pengguna yang pertama menyukai post
  const firstUser = getData.likes[0].user;

  // penyesuaian konten berdasarkan ukuran device
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
            <Avatar radius="full" size={windowWidth <= 350 ? "md" : "lg"} src={getData.logo} />
            <div className="flex flex-col justify-center font-normal">
              <span className="text-[16px] font-semibold leading-none text-default-600">{getData.company}</span>
              <span className="text-[14px] tracking-wide text-gray-600" >{getData.followers} Followers</span>
            </div>
          </ModalHeader>
          <ModalBody className="xs:!px-4">

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 pb-2">
              {/* left content */}
              <div className="!flex !flex-col">
                <Slider {...settings}>
                  {
                    getData.imgPost.map((img: any, index: any) => (
                      <div key={index}>
                        <Image
                          src={img.url}
                          className="w-[100%] max-w-[512px] sm:h-[175px] md:h-[350px] h-[500px] bg-gray-800 object-contain object-center"
                          width={500}
                          height={500}
                          alt={`post ${index}`}
                          loading="lazy"
                        />
                      </div>
                    ))
                  }
                </Slider>
              </div>

              {/* right content */}
              <div className="flex flex-col">
                <Tabs aria-label="opsi">

                  {/* description */}
                  <Tab className="!py-0" key="description" title="Deskripsi">
                    <ScrollShadow
                      className="sm:h-[150px] md:h-[200px] h-[350px]"
                      isEnabled={false}
                      hideScrollBar>
                      {/* sentence */}
                      <div className="py-4" dangerouslySetInnerHTML={{ __html: getData.desc }} />

                      {/* tags */}
                      <div className="space-x-2">
                        {
                          getData.tag.map((tag: any) =>
                            <a href={tag.link} className="font-semibold py-2" aria-label={tag.name}>#{tag.name}</a>
                          )
                        }
                      </div>
                    </ScrollShadow>

                    <div className="flex flex-row space-x-3 py-2">
                      <div className="flex items-center space-x-1">
                        <Button variant="light" color="default" startContent={<FontAwesomeIcon fontSize={24} icon={faHeart} />} isIconOnly />
                        <span>{getData.likes.length} Suka</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Button variant="light" color="default" startContent={<FontAwesomeIcon fontSize={21} icon={faShareFromSquare} />} isIconOnly />
                        <span>{getData.share} dibagikan</span>
                      </div>
                    </div>

                    <div className="flex flex-row xs:flex-wrap items-center">
                      <div className="flex flex-row space-x-[-8px]">
                        {
                          getData.likes.map((data: any) => getData.likes.length <= 3 ?
                            <Avatar className="object-cover border-1 border-white 
                            xs:hover:translate-y-0 hover:-translate-y-2 ease-in duration-200" radius="full" size="sm" src={data.imgUrl} />
                            :
                            '')
                        }
                      </div>
                      <p className="ml-2">disukai oleh <span className="font-semibold">{firstUser}</span> dan <span className="font-semibold">{getData.likes.length - 1}</span> Lainnya</p>
                    </div>
                    <span className="flex justify-end text-[14px] text-gray-600">{getData.date}</span>
                  </Tab>

                  {/* comments */}
                  <Tab key="comments" title="Komentar">
                    <div className="flex flex-col xs:flex-col-reverse xs:gap-3">
                      <CommentPost data={getData.comments} />
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