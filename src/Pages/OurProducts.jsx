import {
  Box,
  VStack,
  SimpleGrid,
  Text,
  HStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ImgData = [
  { id: 1, text: "Breakfast Cruise", img: "./img/prod1.png", alt: "prod1" },
  { id: 2, text: "City Lights", img: "./img/prod2.png", alt: "prod2" },
  { id: 3, text: "Dinner Cruise", img: "./img/prod3.png", alt: "prod3" },
  { id: 4, text: "Dog Cruise", img: "./img/prod4.png", alt: "prod4" },
  { id: 5, text: "Dining Experiences", img: "./img/prod5.png", alt: "prod5" },
  {
    id: 6,
    text: "Latest feature of Pets Mag",
    img: "./img/prod6.png",
    alt: "prod6",
  },
];

const ImgData2 = [
  {
    id: 1,
    text: "Cruise Only",
    text2: "Lorem Ispum",
    text3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text4: "12/03/2023",
    text5: "Lorem ipsum",
    text6: "Lorem ipsum,Lorem ...",
    Rating: "4.30 (212 Reviews)",
    img: "./img/serv1.png",
    from: "299",
    alt: "serv1",
  },
  {
    id: 2,
    text: "Cruise Only",
    text2: "Lorem Ispum",
    text3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text4: "12/03/2023",
    text5: "Lorem ipsum",
    text6: "Lorem ipsum,Lorem ...",
    Rating: "4.30 (212 Reviews)",
    from: "299",
    img: "./img/serv2.png",
    alt: "serv2",
  },
  {
    id: 3,
    text: "Best Seler",
    text2: "Lorem Ispum",
    text3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text4: "12/03/2023",
    text5: "Lorem ipsum",
    text6: "Lorem ipsum,Lorem ...",
    Rating: "4.30 (212 Reviews)",
    img: "./img/serv3.png",
    from: "299",
    alt: "serv3",
  },
  {
    id: 4,
    text: "Top Rated",
    text2: "Lorem Ispum",
    text3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text4: "12/03/2023",
    text5: "Lorem ipsum",
    text6: "Lorem ipsum,Lorem ...",
    Rating: "4.30 (212 Reviews)",
    from: "299",
    img: "./img/serv4.png",
    alt: "serv4",
  },
];

const OurProducts = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Box w="90%" my="10" mx="auto">
        <HStack gap="5">
          <Box w="30%">
            <VStack fontFamily="Inter">
              <Box backgroundColor={"#DBDBDB"} textAlign="center">
                <Text fontWeight="500" fontSize="22px">
                  Search Schedule
                </Text>
                <Box
                  backgroundColor="#000000"
                  h="2px"
                  w="80%"
                  mx="auto"
                  my="1"
                ></Box>
                <Text
                  fontWeight="300"
                  fontSize="22px"
                  textAlign={"left"}
                  ml="2"
                >
                  Select Sailing Date{" "}
                </Text>
                <Calendar onChange={onChange} value={value} />
              </Box>
              <HStack w="95%">
                <Button
                  borderRadius={"5px"}
                  backgroundColor={"#1B7813"}
                  size="lg"
                  color={"#fff"}
                  _hover={{
                    backgroundColor: "#1B7813",
                    color: "#fff",
                  }}
                  fontFamily="Inter"
                  fontWeight="700"
                  fontSize="12px"
                  h="34px"
                >
                  AVAILABLE
                </Button>
                <Button
                  borderRadius={"5px"}
                  backgroundColor={"#958813"}
                  size="lg"
                  color={"#fff"}
                  _hover={{
                    backgroundColor: "#958813",
                    color: "#fff",
                  }}
                  fontFamily="Inter"
                  fontWeight="700"
                  fontSize="12px"
                  h="34px"
                >
                  SELLING FAST
                </Button>
                <Button
                  borderRadius={"5px"}
                  backgroundColor={"#C30000"}
                  size="lg"
                  color={"#fff"}
                  _hover={{
                    backgroundColor: "#C30000",
                    color: "#fff",
                  }}
                  fontFamily="Inter"
                  fontWeight="700"
                  fontSize="12px"
                  h="34px"
                >
                  SOLD OUT
                </Button>
              </HStack>
              <Button
                borderRadius={"5px"}
                backgroundColor={"#081839"}
                size="lg"
                color={"#fff"}
                _hover={{
                  backgroundColor: "#081839",
                  color: "#fff",
                }}
                fontFamily="Inter"
                fontWeight="700"
                fontSize="18px"
                w="95%"
                h="48px"
                mx={"auto"}
              >
                Check availability{" "}
              </Button>
            </VStack>
          </Box>
          <Box w="70%" backgroundColor={"pink"} position="relative">
            <img src="./img/ded.png" alt="day" />
            <Box
              w="80%"
              m="auto"
              position={"absolute"}
              top="50%"
              left={"50%"}
              transform="translate(-50%, -50%)"
            >
              <Box
                mb="5"
                borderRadius={"20px"}
                textAlign={"center"}
                backgroundColor={"rgba(138, 133, 127, 0.7)"}
                color="#fff"
                py="5"
              >
                <Text fontSize={"22px"} fontWeight="700">
                  We Are Dedicated
                </Text>
                <Box backgroundColor="#fff" h="1px" w="30%" mx="auto"></Box>
                <Text fontSize={"22px"} fontWeight="700">
                  Finding the Best Prices & Experiences for you
                </Text>
                <Text
                  fontSize={"12px"}
                  fontWeight="500"
                  color="#fff"
                  my="5"
                  textAlign={"left"}
                  w="80%"
                  mx="auto"
                >
                  Book your cruise with us, with a partner travel agent or
                  directly with the cruise line. It’s your Vacation!
                </Text>
                <Text
                  fontSize={"12px"}
                  fontWeight="500"
                  color="#fff"
                  my="5"
                  textAlign={"left"}
                  w="80%"
                  mx="auto"
                >
                  Best Price Guarantee - we will work with a network of travel
                  partners after you book with us to make sure you have the best
                  price for you and your group.
                </Text>
                <Text
                  fontSize={"12px"}
                  fontWeight="500"
                  color="#fff"
                  my="5"
                  textAlign={"left"}
                  w="80%"
                  mx="auto"
                >
                  Select a Travel Agent in your area who specializes in cruise
                  vacations.
                </Text>
              </Box>
              <HStack mt="10" w="100%" m="auto">
                <Button
                  borderRadius={"10px"}
                  backgroundColor={"#081839"}
                  size="lg"
                  color={"#fff"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#fff",
                  }}
                  fontFamily="Inter"
                  fontWeight="700"
                  fontSize="14px"
                  w="90%"
                  mx={"auto"}
                >
                  Start Basic Cruise Search
                </Button>
                <Button
                  borderRadius={"10px"}
                  backgroundColor={"#F2CD5B"}
                  size="lg"
                  color={"#081839"}
                  _hover={{
                    backgroundColor: "#F2CD5B",
                    color: "#081839",
                  }}
                  fontFamily="Inter"
                  fontWeight="700"
                  fontSize="14px"
                  w="90%"
                  mx={"auto"}
                >
                  Start Basic Cruise Search
                </Button>
              </HStack>
            </Box>
          </Box>
        </HStack>
      </Box>

      <Box w={"90%"} mx="auto">
        <Text
          lineHeight={"42px"}
          fontSize={"26px"}
          textAlign="center"
          fontWeight="600"
          fontFamily={"Lucida Bright"}
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
        <Box
          w="100%"
          mx="auto"
          h={"1px"}
          my="7px"
          backgroundColor={"#081839"}
        ></Box>
        <Box w="100%" mx="auto" mt="10px" mb="10px">
          <SimpleGrid columns={3} spacing={10}>
            {ImgData?.map((item) => (
              <Box bg="tomato" height="auto" key={item.id}>
                <VStack alignItems="center" gridGap="8px" position={"relative"}>
                  <img src={item.img} alt={item.alt} />
                  <Text
                    w="100%"
                    h="75px"
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                    backgroundColor={"rgba(242, 205, 91, 0.6)"}
                    fontFamily="Inter"
                    position={"absolute"}
                    top="35%"
                    fontSize="28px"
                    fontWeight="700"
                    lineHeight={"34px"}
                    color="#081839"
                  >
                    {item.text}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box mt="2rem">
          <Text
            color="#081839"
            fontFamily="Inter"
            fontWeight="700"
            fontSize="32px"
            lineHeight="39px"
          >
            Services
          </Text>
          <Box
            w="100%"
            mx="auto"
            h={"1px"}
            my="7px"
            backgroundColor={"#081839"}
          ></Box>
        </Box>

        <Box my="10px">
          <Text
            fontFamily="Inter"
            fontWeight="400"
            fontSize="24px"
            lineHeight="29px"
            textAlign={"justify"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
            odio aenean sed adipiscing. Nibh tortor id aliquet lectus proin.
            Tempor nec feugiat nisl pretium fusce id velit ut tortor. Tellus
            rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Commodo odio
            aenean sed adipiscing. Nibh tortor id aliquet lectus proin.
          </Text>
        </Box>

        <Box my="1rem">
          <SimpleGrid columns={4} spacing={5}>
            {ImgData2?.map((item) => (
              <Box key={item.id}>
                <VStack alignItems="left" position={"relative"}>
                  <img boxsize="240px" src={item.img} alt={item.alt} />
                  <Text
                    w="35%"
                    h="40px"
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                    backgroundColor={
                      item.text === "Cruise Only"
                        ? "#081839"
                        : item.text === "Best Seler"
                        ? "#F2CD5B"
                        : item.text === "Top Rated"
                        ? "#277E1F"
                        : ""
                    }
                    color={
                      item.text === "Cruise Only"
                        ? "#F2CD5B"
                        : item.text === "Best Seler"
                        ? "#081839"
                        : item.text === "Top Rated"
                        ? "#F2CD5B"
                        : ""
                    }
                    fontFamily="Inter"
                    position={"absolute"}
                    top="10%"
                    left={"0"}
                    fontSize="12px"
                    fontWeight="700"
                    lineHeight={"15px"}
                    borderRightRadius={"20px"}
                  >
                    {item.text}
                  </Text>
                  <Text
                    fontSize="22px"
                    fontWeight="400"
                    lineHeight={"28px"}
                    color="#000000"
                    fontFamily="Lexend"
                  >
                    {item.text2}
                  </Text>
                  <Text
                    w="100%"
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight={"19px"}
                    color="#000000"
                    fontFamily="Inter"
                    isTruncated
                  >
                    {item.text3}
                  </Text>
                </VStack>
                <HStack mt="10px" justifyContent={"space-between"}>
                  <VStack gap="0">
                    <Heading
                      fontSize="12px"
                      fontWeight="800"
                      lineHeight={"15px"}
                      color="#000000"
                      fontFamily="Inter"
                    >
                      Selling Date
                    </Heading>
                    <Text
                      fontSize="12px"
                      fontWeight="500"
                      lineHeight={"15px"}
                      color="#000000"
                      fontFamily="Inter"
                    >
                      {item.text4}
                    </Text>
                  </VStack>
                  <VStack gap="0">
                    <Heading
                      fontSize="12px"
                      fontWeight="800"
                      lineHeight={"15px"}
                      color="#000000"
                      fontFamily="Inter"
                    >
                      Departs
                    </Heading>
                    <Text
                      fontSize="12px"
                      fontWeight="500"
                      lineHeight={"15px"}
                      color="#000000"
                      fontFamily="Inter"
                    >
                      {item.text5}
                    </Text>
                  </VStack>
                  <VStack gap="0">
                    <Heading
                      fontSize="12px"
                      fontWeight="800"
                      lineHeight={"15px"}
                      color="#000000"
                      fontFamily="Inter"
                    >
                      Part(7)
                    </Heading>
                    <Text
                      fontSize="12px"
                      fontWeight="500"
                      lineHeight={"15px"}
                      color="#000000"
                      fontFamily="Inter"
                    >
                      {item.text6}
                    </Text>
                  </VStack>
                </HStack>
                <HStack
                  justifyContent={"space-between"}
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="800"
                  lineHeight={"17px"}
                  mt="5"
                >
                  <HStack>
                    <img src="./img/starprod.png" alt="star" />
                    <Text>{item.Rating}</Text>
                  </HStack>
                  <HStack>
                    <Text color={"#000"}>From</Text>
                    <Text color={"#277E1F"}>{item.from}</Text>
                  </HStack>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default OurProducts;
