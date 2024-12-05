import React from "react";
import { Box, Img, Text, SimpleGrid, Button, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

// Slider settings for mobile view
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Section4 = () => {
  const navigate = useNavigate();

  const cards = [
    {
      img: "https://www.sephora.com/contentimages/FY243785-2024-site-home-page-RWD-marketing-banner-ease-convenience-us-2937-release-artwork.jpg?imwidth=400",
      title: "Get Your Gifts On Your Time",
      description: "Fast Easy option for stress-free holidays shopping and you can multiple options and varieties",
      bgColor: "linear-gradient(to right, #0e5e5f 0%, #0e5e5f 100%)",
      category: "Gift And Gift Card",
    },
    {
      img: "https://www.sephora.com/contentimages/FY243785-2024-holiday-site-home-page-RWD-marketing-banner-hub-2936-release.jpg?imwidth=400", 
      title: "Your Holiday Gifts Here",
      description: "Find the season hottest presents, offers and more or explore options to find one that suits your style.",
      bgColor: "#F58C89",
      category: "Learn More",
    },
    {
      img: "https://www.sephora.com/contentimages/FY243785-2024-site-home-page-RWD-marketing-banner-community-us-ca-2947-release-image-only.jpg?imwidth=400",
      title: "Get Holiday Shopping Here",
      description: "Our community is the best place to share gift ideas, holiday hauls, and more.",
      bgColor: "linear-gradient(to right, #10416c 0%, #10416c 100%)",
      category: "Makeup",
    },
  ];

  const handleNavigation = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  // Check if the current screen is small (for mobile view)
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box w="100%" p={5}>
      {isSmallScreen ? (
        <Slider {...sliderSettings}>
          {cards.map((card, index) => (
            <Box
              key={index}
              maxWidth="400px"
              width="100%"
              borderRadius="lg"
              overflow="hidden"
              cursor="pointer"
              boxShadow="md"
              _hover={{ transform: "scale(1.03)" }}
              mx="auto"
              bg="white"
              p={1}
            >
              <Img
                src={card.img}
                alt={card.title}
                w="100%"
                h="300px"
                objectFit="cover"
                borderRadius="lg"
              />
              <Box
                p={4}
                bg={card.bgColor}
                borderRadius="lg"
                borderTopLeftRadius="0"
                borderTopRightRadius="0"
              >
                <Text fontSize="lg" fontWeight="semibold" color="white" mb={2}>
                  {card.title}
                </Text>
                <Text fontSize="sm" fontWeight="normal" color="white" mb={3}>
                  {card.description}
                </Text>
                <Button
                  colorScheme="whiteAlpha"
                  size="sm"
                  onClick={() => handleNavigation(card.category)}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          ))}
        </Slider>
      ) : (
        // SimpleGrid for large screen layouts
        <SimpleGrid columns={[1, 2, 3]} spacing={6} px={[4, 6, 12]}>
          {cards.map((card, index) => (
            <Box
              key={index}
              maxWidth="400px"
              width="100%"
              borderRadius="lg"
              overflow="hidden"
              cursor="pointer"
              boxShadow="md"
              _hover={{ transform: "scale(1.03)" }}
              mx="auto"
              bg="white"
              p={1}
            >
              <Img
                src={card.img}
                alt={card.title}
                w="100%"
                h="300px"
                objectFit="cover"
                borderRadius="lg"
              />
              <Box
                p={4}
                bg={card.bgColor}
                borderRadius="lg"
                borderTopLeftRadius="0"
                borderTopRightRadius="0"
              >
                <Text fontSize="lg" fontWeight="semibold" color="white" mb={2}>
                  {card.title}
                </Text>
                <Text fontSize="sm" fontWeight="normal" color="white" mb={3}>
                  {card.description}
                </Text>
                <Button
                  colorScheme="whiteAlpha"
                  size="sm"
                  onClick={() => handleNavigation(card.category)}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Section4;
