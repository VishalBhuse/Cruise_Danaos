import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";

export const Navbar = () => {
  return (
    <Box my="5">
      <Box w="100%" py="1rem" backgroundColor={"#D4E2FE"}>
        <Box
          w="100%"
          mx="auto"
          display="flex"
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Box>
            <HStack>
              <img src="./img/d.png" alt="d" />
              <Text
                color="#081839"
                fontFamily="Inria Seri"
                fontWeight="700"
                fontSize="34px"
                lineHeight="41px"
              >
                DANAOS
              </Text>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BiSearch />}
                  py="25px"
                  fontSize="25px"
                />
                <Input
                  py="25px"
                  type="text"
                  letterSpacing={"5px"}
                  placeholder="Search..."
                  w="450px"
                  backgroundColor={"#FFFFFF"}
                />
              </InputGroup>

              <Button
                backgroundColor={"#081839"}
                size="lg"
                color={"#F2CD5C"}
                _hover={{
                  backgroundColor: "#081839",
                  color: "#F2CD5C",
                }}
                fontFamily="Inter"
                fontWeight="700"
                fontSize="22px"
                px="10"
              >
                Login
              </Button>
              <Button
                px="10"
                backgroundColor={"#081839"}
                size="lg"
                color={"#F2CD5C"}
                _hover={{
                  backgroundColor: "#081839",
                  color: "#F2CD5C",
                }}
                fontFamily="Inter"
                fontWeight="700"
                fontSize="22px"
              >
                Signup
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>
      <Box w="50%" mx="auto" mt="-25px" mb="5">
        <HStack
          backgroundColor={"#081839"}
          color={"#F2CD5C"}
          justifyContent="space-between"
          borderRadius={"15px"}
          fontFamily="Inter"
          fontWeight="700"
          fontSize="24px"
          px="5"
          py="3"
        >
          <Text>Home</Text>
          <Text>Package</Text>
          <Text>Sailing</Text>
          <Text>Gallery</Text>
          <Text>Offers</Text>
        </HStack>
      </Box>
    </Box>
  );
};
