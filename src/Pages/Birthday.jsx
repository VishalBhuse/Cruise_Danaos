import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Birthday = () => {
  return (
    <Box width={"90%"} margin={"auto"} fontFamily="inter">
      {/* Birthday Part start */}
      <Box display={"flex"} height={"500px"}>
        <Box width={"50%"}>
          <Image height={"500px"} width="100%" src="./img/birth.png" />
        </Box>
        <Box width={"50%"} textAlign={"center"}>
          <Text
            marginTop="100px"
            fontWeight="700"
            fontSize="52px"
            fontColor="#000000"
          >
            Birthday Packages
          </Text>
          <Text fontWeight="500" fontSize="36px" fontColor="#000000">
            Starts From $499
          </Text>
          <Text
            fontWeight="400"
            fontSize="22px"
            fontColor="#000000"
            marginTop="10px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
            odio aenean sed adipiscing.
          </Text>

          <Button
            width={"434px"}
            height="62px"
            backgroundColor={"#081839"}
            color="white"
            _hover={{ backgroundColor: "#081839" }}
            marginTop="20px"
            fontWeight={"700"}
            fontSize={"18px"}
          >
            View Packages{" "}
          </Button>
        </Box>
      </Box>

      {/* Wedding Packages start */}

      <Box display={"flex"} height={"500px"} marginTop="80px">
        <Box width={"50%"}>
          <Image height={"500px"} width="100%" src="./img/wedding.png" />
        </Box>
        <Box width={"50%"} textAlign={"center"}>
          <Text
            marginTop="100px"
            fontWeight="700"
            fontSize="52px"
            fontColor="#000000"
          >
            Wedding Packages
          </Text>
          <Text fontWeight="500" fontSize="36px" fontColor="#000000">
            Starts From $499
          </Text>
          <Text
            fontWeight="400"
            fontSize="22px"
            fontColor="#000000"
            marginTop="10px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
            odio aenean sed adipiscing.
          </Text>

          <Button
            width={"434px"}
            height="62px"
            backgroundColor={"#081839"}
            color="white"
            _hover={{ backgroundColor: "#081839" }}
            marginTop="20px"
            fontWeight={"700"}
            fontSize={"18px"}
          >
            View Packages{" "}
          </Button>
        </Box>
      </Box>

      {/* birthday grid part start */}
      <SimpleGrid
        columns={3}
        spacing={5}
        height="200px"
        marginTop={"60px"}
        fontColor="#000000"
      >
        <Box display="flex">
          <Box width="50%">
            <Image height={"100%"} src="./img/party-birth.png"></Image>
          </Box>
          <Box width="50%" padding={"10px"}>
            <Text fontWeight={"700"} fontSize="22px" fontColor="#000000">
              Lorem Ispum
            </Text>
            <Text fontWeight={"400"} fontSize="13px">
              Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.
            </Text>
            <Text fontWeight={"400"} fontSize="13px" marginTop={"5px"}>
              Starts From $399
            </Text>
            <Button
              width="113px"
              height={"40px"}
              marginLeft="30px"
              backgroundColor={"#081839"}
              color="white"
              marginTop={"10px"}
              _hover={{ backgroundColor: "#081839" }}
            >
              Book Now
            </Button>
          </Box>
        </Box>
        
        <Box display="flex">
          <Box width="50%">
            <Image height={"100%"} src="./img/party2-birth.png"></Image>
          </Box>
          <Box width="50%" padding={"10px"}>
            <Text fontWeight={"700"} fontSize="22px" fontColor="#000000">
              Lorem Ispum
            </Text>
            <Text fontWeight={"400"} fontSize="13px">
              Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.
            </Text>
            <Text fontWeight={"400"} fontSize="13px" marginTop={"5px"}>
              Starts From $399
            </Text>
            <Button
              width="113px"
              height={"40px"}
              marginLeft="30px"
              backgroundColor={"#081839"}
              color="white"
              marginTop={"10px"}
              _hover={{ backgroundColor: "#081839" }}
            >
              Book Now
            </Button>
          </Box>
        </Box>
        <Box display="flex">
          <Box width="50%">
            <Image height={"100%"} src="./img/party3-birth.png"></Image>
          </Box>
          <Box width="50%" padding={"10px"}>
            <Text fontWeight={"700"} fontSize="22px" fontColor="#000000">
              Lorem Ispum
            </Text>
            <Text fontWeight={"400"} fontSize="13px">
              Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.
            </Text>
            <Text fontWeight={"400"} fontSize="13px" marginTop={"5px"}>
              Starts From $399
            </Text>
            <Button
              width="113px"
              height={"40px"}
              marginLeft="30px"
              backgroundColor={"#081839"}
              color="white"
              marginTop={"10px"}
              _hover={{ backgroundColor: "#081839" }}
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Birthday;