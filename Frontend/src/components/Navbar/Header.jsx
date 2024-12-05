import { Box, Text, Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      p={["10px", "12px", "16px", "18px"]}
      bg="lightblue"
      color="black"
      fontSize={["12px", "14px", "16px", "18px"]}
      fontWeight={700}
      cursor="pointer"
      textAlign="center"
    >
      <Text>
        <Text as="span" fontWeight="bold">
          Cyber Monday 30% Off Peter Thomas Roth & Youth to the People{" "}
        </Text>
        <Text as="span" fontWeight="400">
          Today
        </Text>
      </Text>
    </Box>
  );
};

export default Header;
