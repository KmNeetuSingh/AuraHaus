import React, { useState } from "react";
import { Box, Img, SimpleGrid, Text, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import slides from "../../Utils/Homepage/Slider4"; // The JSON array provided
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Slider4 = () => {
  const navigate = useNavigate();
  const [showArrows, setShowArrows] = useState(false);

  const SampleNextArrow = ({ onClick }) => (
    <Box
      as="button"
      onClick={onClick}
      position="absolute"
      top="50%"
      right="10px"
      transform="translateY(-50%)"
      background="black"
      borderRadius="50%"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
      zIndex="10"
      display={showArrows ? "flex" : "none"}
      alignItems="center"
      justifyContent="center"
      w="40px"
      h="40px"
      _hover={{
        background: "gray.700",
        transform: "scale(1.1)",
        transition: "0.3s ease",
      }}
    >
      <FaArrowRight size={24} color="white" />
    </Box>
  );

  const SamplePrevArrow = ({ onClick }) => (
    <Box
      as="button"
      onClick={onClick}
      position="absolute"
      top="50%"
      left="10px"
      transform="translateY(-50%)"
      background="black"
      borderRadius="50%"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
      zIndex="10"
      display={showArrows ? "flex" : "none"}
      alignItems="center"
      justifyContent="center"
      w="40px"
      h="40px"
      _hover={{
        background: "gray.700",
        transform: "scale(1.1)",
        transition: "0.3s ease",
      }}
    >
      <FaArrowLeft size={24} color="white" />
    </Box>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  const handleNavigation = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <Box
      p={["4", "6", "12", "16"]}
      w="full"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <Text fontWeight={650} fontSize="30px">
        Beauty Offers
      </Text>

      <Slider {...settings}>
        {slides.map((elem, i) => (
          <SimpleGrid key={i} padding="10px">
            <SimpleGrid boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.15)">
              <Box mb="10px" mx="auto" w="100%">
                <Img
                  alt="slider"
                  width="100%"
                  maxWidth="600px" // Increased size
                  height="auto"
                  src={elem.image}
                />
              </Box>
              <Text fontSize="16px" fontWeight={700}>
                {elem.title}
              </Text>
              <Text fontSize="14px" fontWeight={500} color="gray.600" mt="2">
                {elem.title2} {/* New title2 displayed */}
              </Text>
              <Text
                fontWeight={400}
                fontSize="14px"
                whiteSpace="prewrap"
                mt="4"
              >
                {elem.description}
              </Text>
              <Button
                mt="10px"
                color="black"
                _hover={{ bg: "black.700" }}
                onClick={() => handleNavigation(elem.category)}
              >
                Shop Now
              </Button>
            </SimpleGrid>
          </SimpleGrid>
        ))}
      </Slider>
    </Box>
  );
};

export default Slider4;
