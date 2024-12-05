import React from "react";
import { Box, Image, Text, SimpleGrid, Button, useBreakpointValue } from "@chakra-ui/react";
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

const Section1 = () => {
  const navigate = useNavigate();

  const cards = [
    {
      img: "https://www.sephora.com/contentimages/2024-12-01-slotting-holiday-site-rwd-home-page-marketing-banner-ysl-us-handoff_01.jpg?imwidth=400",
      description: "Trending $50 & Under Gifts",
      extraDescription: "Discover the perfect makeup gifts under $50!",
      category: "Makeup",
      bgColor: "linear-gradient(to right, #7b136a 0%, #7b136a 100%)",
    },
    {
      img: "https://www.sephora.com/contentimages/2024-11-29-slotting-just-arrived-v3-site-rwd-home-page-marketing-banner-english-SOL-US-CAN-handoff_01.jpg?imwidth=400",
      description: "Only at Sephora",
      extraDescription: "Shop exclusive hair care products now.",
      category: "Hair",
      bgColor: "linear-gradient(to right, #934c50 0%, #934c50 100%)",
    },
    {
      img: "https://www.sephora.com/contentimages/2024-12-1-sc-sku-site-desktop-mobile-app-home-page-rwd-marketing-banner-800x534-en-us.jpg?imwidth=400",
      description: "The Gift of Great Skin",
      extraDescription: "Give the gift of glowing skin this holiday season.",
      category: "Gift And Gift Card",
      bgColor: "linear-gradient(to right, #a20d2b 0%, #a20d2b 100%)",
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
              p={1}  // Add padding between the cards
            >
              <Image
                src={card.img}
                alt={card.category}
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
                  {card.description}
                </Text>
                <Text fontSize="sm" fontWeight="normal" color="white" mb={3}>
                  {card.extraDescription}
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
              p={1}  // Add padding between the cards
            >
              <Image
                src={card.img}
                alt={card.category}
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
                  {card.description}
                </Text>
                <Text fontSize="sm" fontWeight="normal" color="white" mb={3}>
                  {card.extraDescription}
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

export default Section1;
