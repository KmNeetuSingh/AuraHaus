import { Box, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import card from "../../Utils/Homepage/Section2";
import { useNavigate } from "react-router-dom";

const Section2 = () => {
  const handleNavigation = useNavigate();

  const handleClick = (elem) => {
    const category = elem;
    handleNavigation(`/products`);
    handleNavigation(
      `/products?category=${category.replace(" & ", "%20%26%20")}`
    );
    onclose();
  };

  const TextCreate = ({ text, category }) => {
    return <Text onClick={() => handleClick(category)}>{text}</Text>;
  };

  return (
    <Box px={["4", "4", "12", "24"]} py={"40px"}>
      <Box mb="20px">
        <Text fontWeight={700} fontSize={"20px"}>
          Need a Little Guidance ?
        </Text>
        <Text fontSize={"14px"} fontWeight={"400"}>
          Check out what's popular now.
        </Text>
      </Box>

      {/* Grid of Boxes */}
      <SimpleGrid
        gridTemplateColumns={[
          "repeat(3,1fr)",
          "repeat(3,1fr)",
          "repeat(5,1fr)",
          "repeat(8,1fr)",
        ]}
        spacing={"10px"}
      >
        {card.map((elem, i) => (
          <SimpleGrid
            key={i}
            gridAutoColumns={"1fr"}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.15)"
            p={"10px"}
            spacing={"10px"}
            transition={"all .5s ease"}
            _hover={{ transform: "translateY(-5px)" }}
            cursor={"pointer"}
          >
            <TextCreate text={elem.title} category={elem.category} />
            <Flex w="100%" alignItems="center">
              <Flex w={"40px"} justifyContent="flex-start" mr={2}>
                <Img src={elem.img} w={"100%"} />
              </Flex>
            </Flex>
          </SimpleGrid>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Section2;
