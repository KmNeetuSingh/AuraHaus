import { Box, Text, Flex } from "@chakra-ui/react";
import HeaderImage from "../../assets/HeaderImage.avif"; // Adjust the path based on your project structure

const Header = () => {
  return (
    <Box
      p={["10px", "10px", "18px", "18px"]}
      bgImage={`url(${HeaderImage})`}
      bgSize="cover"
      bgPosition="center"
      color="Black"
      fontSize={"14px"}
      fontWeight={700}
      cursor={"pointer"}
    >
      <Flex justifyContent={"flex-start"} alignItems={"center"}>
        {/* Left Section: Offer Details */}
        <Text>
          <span style={{ fontWeight: "bold" }}>
            Cyber Monday 30% Off Peter Thomas Roth & Youth to the People{" "}
          </span>
          <span style={{ fontWeight: "400" }}>Today</span>
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
