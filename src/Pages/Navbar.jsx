import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box display={"flex"} justifyContent="space-around" w="80%" mx="auto" my="1rem">
      <Link to="/">Home</Link>
      <Link to="/outproducts">Our Products</Link>
      <Link to="/birthday">Birthday</Link>
      <Link to="/travel">Travel</Link>
    </Box>
  );
};
