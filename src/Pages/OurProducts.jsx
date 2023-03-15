import { Box, Text } from "@chakra-ui/react";
import React from "react";

const OurProducts = () => {
  return (
    <section>
      <Box w={"90%"} mx="auto" backgroundColor={'red'}>
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
      <Box w='90%'h={'5px'} my="5px"></Box>
    </section>
  );
};

export default OurProducts;
