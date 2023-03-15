import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const OurProducts = () => {
  return (
    <section>
      <Box w={"90%"} mx="auto">
        <Text
          lineHeight={"42px"}
          fontSize={"26px"}
          textAlign="center"
          fontFamily={"Lucida Bright"}
          fontWeight="600"
        >
          Sail With Us
        </Text>
        <Text
          fontWeight={400}
          fontSize={"22px"}
          lineHeight={"27px"}
          textAlign="center"
          fontFamily="Inter"
        >
          -Our Products-
        </Text>
      </Box>
      <Box w="90%" mx="auto" h={"1px"} my="7px" backgroundColor={"#000"}></Box>
      <Box w="90%" mx="auto" mt="10px">
        <SimpleGrid columns={3} spacing={10}>
          <Box bg="tomato" height="auto">
            <img src="./img/prod1.png" alt="prod1" />
          </Box>
          <Box bg="tomato" height="auto">
            <img src="./img/prod1.png" alt="prod1" />
          </Box>
          <Box bg="tomato" height="auto">
            <img src="./img/prod1.png" alt="prod1" />
          </Box>
          <Box bg="tomato" height="auto">
            <img src="./img/prod1.png" alt="prod1" />
          </Box>
          <Box bg="tomato" height="auto">
            <img src="./img/prod1.png" alt="prod1" />
          </Box>
          <Box bg="tomato" height="auto">
            <img src="./img/prod1.png" alt="prod1" />
          </Box>
        </SimpleGrid>
      </Box>
    </section>
  );
};

export default OurProducts;
