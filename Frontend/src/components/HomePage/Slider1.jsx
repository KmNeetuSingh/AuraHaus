import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import slides from "../../Utils/Homepage/Slider1";

const Slider1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;
  const slidesToShow = 3;

  // Custom Next Arrow
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.6)", 
          borderRadius: "50%",
          padding: "12px",
          zIndex: 1,
          cursor: "pointer",
          color: "#fff", 
          fontSize: "18px", 
          opacity: 0,
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
        className="arrow-button"
        onClick={onClick}
      >
        &#10095;
      </div>
    );
  };

  // Custom Prev Arrow
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.6)", 
          borderRadius: "50%",
          padding: "12px",
          zIndex: 1,
          cursor: "pointer",
          color: "#fff", 
          fontSize: "18px", 
          opacity: 0,
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
        className="arrow-button"
        onClick={onClick}
      >
        &#10094;
      </div>
    );
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: slidesToShow,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
    <Box
      className="slider-container"
      position="relative"
      onMouseEnter={() => {
        const buttons = document.querySelectorAll(".arrow-button");
        buttons.forEach((button) => (button.style.opacity = 1)); // Show arrows on hover
      }}
      onMouseLeave={() => {
        const buttons = document.querySelectorAll(".arrow-button");
        buttons.forEach((button) => (button.style.opacity = 0)); // Hide arrows on leave
      }}
    >
      <Slider {...settings}>
        {slides.map((elem, i) => (
          <SimpleGrid key={i} cursor={"pointer"} p={"10px"} w="100%">
            <Box mb={"10px"} mx={"auto"} w={"100%"}>
              <Img
                src={elem.img}
                alt="slider image"
                w="700px"
                h="400px"
                objectFit="cover"
                cursor={"pointer"}
              />
            </Box>
            <Box p={"20px"} textAlign={"left"} bgColor={elem.bg} h={"150px"}>
              <Text fontWeight={700} fontSize={"20px"}>{elem.title}</Text>
              <Text
                fontSize={"14px"}
                _hover={{ textDecoration: "underline" }}
                mb={"5px"}
              >
                {elem.description}
              </Text>
              <Text fontSize={"14px"} fontWeight={700}>
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
