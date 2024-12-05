import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Img, Text } from "@chakra-ui/react";
import slides from "../../Utils/Homepage/Slider1";

const Slider1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Ensure only one slide is visible at a time
    slidesToScroll: 1,
    autoplay: false,
    dots: true, // Show dots for navigation
    arrows: false, // Hide arrows on small screens
    draggable: true, // Allows sliding by clicking anywhere on the image
    customPaging: (i) => (
      <div
        style={{
          width: "6px",
          height: "6px",
          background: i === currentIndex ? "#FFD670" : "#f5f5f5", // Highlight active dot
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
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        {dots} {/* Display dots below the slider */}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // On large screens (>= 1024px)
        settings: {
          slidesToShow: 3, // Show 3 slides at once on large screens
          slidesToScroll: 1,
          dots: false, // Hide dots on large screens
          arrows: true, // Enable arrows on large screens
        },
      },
      {
        breakpoint: 768, // On small screens (< 1024px)
        settings: {
          slidesToShow: 1, // Only 1 slide visible at a time on small screens
          slidesToScroll: 1,
          dots: true, // Enable dots on small screens
          arrows: false, // Disable arrows on small screens
        },
      },
    ],
    beforeChange: (current, next) => setCurrentIndex(next), // Update the index when the slide changes
  };

  return (
    <Box position="relative" maxWidth="100%" overflow="hidden" padding="0px">
      <Slider {...settings}>
        {slides.map((elem, i) => (
          <Box
            key={i}
            cursor="pointer"
            p="10px" // Adds gap between images
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Img
              src={elem.img}
              alt="slider image"
              width="100%"
              height={{ base: "200px", md: "300px", lg: "400px" }}
              objectFit="cover"
              cursor="pointer"
              borderRadius="md"
            />
            <Box
              p="20px"
              textAlign="left"
              bgColor={elem.bg}
              h="auto" // Content box height based on text
              mt="10px" // Adds space between the image and the description
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
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Slider1;
