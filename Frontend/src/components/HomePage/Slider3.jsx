import { Box, Button, Img, SimpleGrid, Text } from "@chakra-ui/react";
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
          transition: "opacity 0.3s ease, transform 0.3s ease",
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
          transition: "opacity 0.3s ease, transform 0.3s ease",
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
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  const handleClick = (elem) => {
    const category = elem;
    handleNavigation(`/products`);
    handleNavigation(`/products?category=${category.replace(" & ", "%20%26%20")}`);
  };

  const ImgBox = ({ src, category }) => {
    return (
      <Img
        onClick={() => handleClick(category)}
        alt="slider"
        width="100%"
        maxWidth="100%"  // Ensure image is responsive
        src={src}
        objectFit="cover"  // Optional: ensures image fills the container
      />
    );
  };

  return (
    <Box
      p={["4", "6", "12", "16"]}
      pt={[6, 6, 6, 6]}
      pb={[12, 12, 12, 12]}
    >
      <Text fontWeight={650} fontSize={["24px", "30px"]} mb={4}>
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
            <SimpleGrid key={i} cursor={"pointer"} padding={"10px"}>
              <SimpleGrid
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.15)"
                _hover={{ transform: "translateY(-5px)" }}
                p={["10px", "20px", "20px", "20px"]}
              >
                <Box mb={"10px"} mx={"auto"} w={"100%"}>
                  <ImgBox src={elem.image} category={elem.category} />
                </Box>

                {/* Title */}
                <Text fontSize={["13px", "15px"]} fontWeight={500} mb="5px">
                  {elem.title}
                </Text>

                {/* Description */}
                <Text fontWeight={400} fontSize={["12px", "14px"]} mb="5px">
                  {elem.description}
                </Text>

                {/* Short Description */}
                <Text fontSize={["12px", "13px"]} fontWeight={400} mb="10px">
                  {elem.shortDescription}
                </Text>

                {/* Points */}
                <Text fontSize={["13px", "14px"]} fontWeight={700} mb="15px">
                  {elem.points}
                </Text>

                {/* Sign In Button */}
                <Button
                  backgroundColor="black"
                  color="white"
                  _hover={{ backgroundColor: "gray.800" }}
                  size="sm"
                  onClick={() => handleNavigation("/signin")}
                >
                  Sign In to Access
                </Button>
              </SimpleGrid>
            </SimpleGrid>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Slider3;
