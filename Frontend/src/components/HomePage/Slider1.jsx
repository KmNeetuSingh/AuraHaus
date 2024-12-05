import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import slides from "../../Utils/Homepage/Slider1";

const Slider1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: true,
    customPaging: (i) => (
      <div
        style={{
          width: "6px",
          height: "6px",
          background: i === currentIndex ? "#FFD670" : "#f5f5f5",
          borderRadius: "50%",
          cursor: "pointer",
          margin: "5px 0",
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {dots}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
    <Box position="relative" maxWidth="100%" overflow="hidden">
      <Slider {...settings}>
        {slides.map((elem, i) => (
          <SimpleGrid
            key={i}
            cursor="pointer"
            p="0"
            width={{ base: "100%", md: "90%", lg: "80%" }}
            mx="auto"
          >
            <Box width="100%" onClick={() => setCurrentIndex(i)}>
              <Img
                src={elem.img}
                alt="slider image"
                width="100%"
                height={{ base: "200px", md: "300px", lg: "400px" }}
                objectFit="cover"
                cursor="pointer"
                borderRadius="md"
              />
            </Box>
            <Box
              p="20px"
              textAlign="left"
              bgColor={elem.bg}
              h="150px"
              mt="0" // Removed margin
            >
              <Text fontWeight="700" fontSize="20px">
                {elem.title}
              </Text>
              <Text fontSize="14px" _hover={{ textDecoration: "underline" }} mb="5px">
                {elem.description}
              </Text>
              <Text fontSize="14px" fontWeight="700">
                SHOP NOW ▸
              </Text>
            </Box>
          </SimpleGrid>
        ))}
      </Slider>
    </Box>
  );
};

export default Slider1;
