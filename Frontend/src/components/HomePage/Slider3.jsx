import { Box, Img, SimpleGrid, Text, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import slides from "../../Utils/Homepage/Slider3";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Slider3 = () => {
  const handleNavigation = useNavigate();

  // Custom Next Arrow
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          height: "50px",
          width: "50px",
          position: "absolute",
          right: "15px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
          opacity: 0,
        }}
        className="slider-arrow"
        onClick={onClick}
      >
        <FaArrowRight color="white" size={24} />
      </div>
    );
  }

  // Custom Prev Arrow
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          height: "50px",
          width: "50px",
          position: "absolute",
          left: "15px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
          opacity: 0,
        }}
        className="slider-arrow"
        onClick={onClick}
      >
        <FaArrowLeft color="white" size={24} />
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  const handleClick = (elem) => {
    const category = elem;
    handleNavigation(`/products?category=${category.replace(" & ", "%20%26%20")}`);
  };

  const ImgBox = ({ src, category }) => (
    <Img
      onClick={() => handleClick(category)}
      alt="slider"
      src={src}
      width="100%"
      height={["200px", "250px", "300px"]}
      borderRadius="md"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.1)" }}
    />
  );

  return (
    <Box
      p={["4", "6", "12", "16"]}
      pt={[6, 6, 6, 6]}
      pb={[12, 12, 12, 12]}
      bg="gray.900"
      borderRadius="lg"
      boxShadow="dark-lg"
    >
      <Text
        fontWeight={650}
        fontSize={["20px", "24px", "30px"]}
        mb="8"
        color="white"
        textAlign="center"
      >
        New Arrivals
      </Text>

      <Box
        position="relative"
        className="slider-container"
        onMouseEnter={(e) => {
          const arrows = e.currentTarget.querySelectorAll(".slider-arrow");
          arrows.forEach((arrow) => (arrow.style.opacity = 1));
        }}
        onMouseLeave={(e) => {
          const arrows = e.currentTarget.querySelectorAll(".slider-arrow");
          arrows.forEach((arrow) => (arrow.style.opacity = 0));
        }}
      >
        <Slider {...settings}>
          {slides.map((elem, i) => (
            <SimpleGrid
              key={i}
              cursor="pointer"
              padding="10px"
              maxW="350px"
              mx="auto"
              bg="white"
              boxShadow="0px 6px 12px rgba(0, 0, 0, 0.3)"
              _hover={{ transform: "translateY(-5px)" }}
              borderRadius="md"
            >
              <Box mb="10px" mx="auto" w="full">
                <ImgBox src={elem.image} category={elem.category} />
              </Box>
              <Text fontSize={["12px", "14px", "15px"]} fontWeight={500} mb="5px">
                {elem.title}
              </Text>
              <Text fontSize={["11px", "13px", "14px"]} fontWeight={400} mb="5px">
                {elem.description}
              </Text>
              <Text fontSize={["12px", "14px"]} fontWeight={700} mb="10px">
                {elem.points}
              </Text>
              {elem.price && (
                <Text
                  fontSize={["14px", "16px"]}
                  fontWeight={700}
                  color="black"
                  mb="10px"
                >
                  ${elem.price}
                </Text>
              )}
              <Box display="flex" justifyContent="space-between">
                <Button colorScheme="teal" size="sm">
                  Apply Now
                </Button>
                <Button colorScheme="blue" size="sm">
                  See Now
                </Button>
              </Box>
            </SimpleGrid>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Slider3;
