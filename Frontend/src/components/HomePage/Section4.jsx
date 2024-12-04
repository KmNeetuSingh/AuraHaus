import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Section4 = () => {
  const navigate = useNavigate();

  const cards = [
    {
      img: "https://www.sephora.com/contentimages/FY243785-2024-site-home-page-RWD-marketing-banner-ease-convenience-us-2937-release-artwork.jpg?imwidth=400",
      title: "Get Your Gifts On Your Time",
      description: "Fast Easy option for stress-free holidays shopping and you can multiple options and varieties",
      bg: "linear-gradient(to right, #0e5e5f 0%, #0e5e5f 100%)",
      clr: "linear-gradient(to right, #0e5e5f 0%, #0e5e5f 100%)",
      category: "Gift And Gift Card",
    },
    {
      img: "https://www.sephora.com/contentimages/FY243785-2024-holiday-site-home-page-RWD-marketing-banner-hub-2936-release.jpg?imwidth=400", 
      title: "Your Holiday Gifts Here",
      description:
        "Find the season hottest presents, offers and more or explore options to find one that suits your style.",
      bg: "#F58C89",
      clr: "black",
      category: "Learn More",
    },
    {
      img: "https://www.sephora.com/contentimages/FY243785-2024-site-home-page-RWD-marketing-banner-community-us-ca-2947-release-image-only.jpg?imwidth=400",
      title: "Get Holiday Shopping Here",
      description:
        "Our community is the best place to share gift ideas, holiday hauls, and more.",
      bg: "linear-gradient(to right, #10416c 0%, #10416c 100%)",
      clr: "linear-gradient(to right, #10416c 0%, #10416c 100%)",
      category: "Makeup",
    },
  ];

  const handleNavigation = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  const ImgBox = ({ src, category }) => (
    <Img
      onClick={() => handleNavigation(category)}
      alt="card-image"
      w="100%"
      h="300px"
      objectFit="cover"
      borderRadius="md"
      cursor="pointer"
      _hover={{ transform: "scale(1.05)" }}
      transition="transform 0.3s ease"
      src={src}
    />
  );

  return (
    <Box px={[2, 4, 8]} py={8}> {/* Adjusted padding here for more space on the sides */}
      <SimpleGrid columns={[1, 2, 3]} spacing={6} px={[4, 6, 12]} py={6}>
        {cards.map((card, i) => (
          <Box
            key={i}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            cursor="pointer"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.03)" }}
            mb={6} // Added margin bottom for spacing between rows
          >
            {/* Image Section */}
            <ImgBox src={card.img} category={card.category} />

            {/* Description Section */}
            <Box p={6} textAlign="left" bg={card.bg} color={card.clr}>
              <Text fontWeight="bold" fontSize="lg" mb={3}>
                {card.title}
              </Text>
              <Text
                fontSize="sm"
                mb={6}
                _hover={{ textDecoration: "underline" }}
              >
                {card.description}
              </Text>
              <Text
                fontSize="sm"
                fontWeight="bold"
                _hover={{ textDecoration: "underline" }}
              >
                Learn More ▸
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Section4;
