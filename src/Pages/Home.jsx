import { Box, Button, Divider, Image, Input, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";



const Home = () => {
  return <div>
<Box fontFamily={"Inter"} fontStyle={"normal"} padding={"10px"}>
  <Image  src="./img/Rectangle 176.png" width={"90%"} margin={"auto"} ></Image>
  <Box width={"442px"} marginTop={"-680px"} marginLeft={"120px"}>
    <Text fontFamily={"Istok Web"} fontSize={"38px"} lineHeight={"55px"} color={"#081839"} fontWeight={"700"} fontStyle={"normal"}     >Living the cruise life.
A bad day on a cruise is better than a good day anywhere else.</Text>
  <Button margin={"20px 0px"} borderRadius={"10px"} height={"40px"} background={"linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={"700"} fontSize={"16px"} lineHeight={"19px"} color={"#081839"}>Book Now</Button>
 
  <Box display={"flex"} gap={"25px"}>
    <Box width={"207px"} height={"308px"} background={"rgba(8, 24, 57, 0.59)"} borderRadius={"10px"}>
      <Text marginTop={"10px"} textAlign={"center"}  fontWeight={"700"}  fontSize={"32px"} line-height={"39px"} color={"#FFFFFF"}>Tour</Text>
      <Text padding={"10px"}   fontFamily={"Inter"} fontStyle={"normal"} fontWeight={"500"} fontSize={"12px"} lineHeight={"15px"} color={"#FFFFFF"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    <Button marginLeft={"45px"} textAlign={"center"} marginTop={"20px"} background={"linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)"} borderRadius={"10px"} fontFamily={"Inter"} fontSize={"14px"} fontWeight={"700"} color={"#081839"}>View more</Button>
    </Box>
    <Box padding={"5px"} width={"207px"} height={"308px"} background={"rgba(8, 24, 57, 0.59)"} borderRadius={"10px"}>
    <Text marginTop={"10px"} textAlign={"center"}  fontWeight={"700"}  fontSize={"32px"} line-height={"39px"} color={"#FFFFFF"}>Locations</Text>
      <Text  padding={"10px"}  fontFamily={"Inter"} fontStyle={"normal"} fontWeight={"500"} fontSize={"12px"} lineHeight={"15px"} color={"#FFFFFF"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    <Button marginLeft={"45px"} textAlign={"center"} marginTop={"20px"} background={"linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)"} borderRadius={"10px"} fontFamily={"Inter"} fontSize={"14px"} fontWeight={"700"} color={"#081839"}>View more</Button>
    </Box>
  </Box>
 
  </Box>

  <Box display={"flex"} margin={"15px 0px"} position={"relative"} width={"930px"} height={"190px"} left={"188px"} background={"#F2CD5B"} boxShadow={"4px 4px 4px rgba(0, 0, 0, 0.25)"}>
   <Box margin={"20px 0px"}  height={"70%"} padding={"15px"} borderRight={"1px solid black"}>
     <Text margin={"10px 0px"} color={"#081839"} lineHeight={"22px"} fontWeight={"700"} fontSize={"18px"}>Where to?</Text>
    <Input border={"2px solid #081839"} height={"44px"} width={"154px"} placeholder="All destination" ></Input></Box>

    <Box margin={"20px 0px"}  height={"70%"} padding={"15px"} borderRight={"1px solid black"}>
     <Text margin={"10px 0px"} color={"#081839"} lineHeight={"22px"} fontWeight={"700"} fontSize={"18px"}>All Cruise Line</Text>
    <Input border={"2px solid #081839"} height={"44px"} width={"154px"} placeholder="Holland America Line" ></Input></Box>

    <Box margin={"20px 0px"}  height={"70%"} padding={"15px"} >
     <Text margin={"10px 0px"} color={"#081839"} lineHeight={"22px"} fontWeight={"700"} fontSize={"18px"}>Check-In</Text>
    <Input border={"2px solid #081839"} height={"44px"} width={"154px"} placeholder="12 / 03 / 2023" ></Input>
    
    </Box>
    <Box margin={"20px 0px"}  height={"70%"} padding={"15px"} borderRight={"1px solid black"}>
     <Text margin={"10px 0px"} color={"#081839"} lineHeight={"22px"} fontWeight={"700"} fontSize={"18px"}>Check-In</Text>
    <Input border={"2px solid #081839"} height={"44px"} width={"154px"} placeholder="12 / 03 / 2023" ></Input>
    
    </Box>

    <Box margin={"20px 0px"}  height={"70%"} padding={"15px"} >
     <Text margin={"10px 0px"} color={"#081839"} lineHeight={"22px"} fontWeight={"700"} fontSize={"18px"}>Persons & Room</Text>
    <Input border={"2px solid #081839"} height={"44px"} width={"154px"} placeholder="2 Adults - 1 Children 1 Room" ></Input></Box>
    {/* <Button background={"#081839"} width={"113px"} height={"40px"} color={"#FFFFFF"} fontSize={"16px"} lineHeight={"19px"} >Search</Button> */}
  
  <Box marginTop={"125px"} marginLeft={"-120px"}>
  <Button
              width="113px"
              textAlign={"end"}
              height={"40px"}
                          
              backgroundColor={"#081839"}
              color="white"
              marginTop={"10px"}
              _hover={{ backgroundColor: "#081839" }}
            >
             Search
            </Button>
  </Box>
  </Box>
  
</Box>

  </div>;
};

export default Home;
