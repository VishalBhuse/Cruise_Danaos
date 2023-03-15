import React from "react";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Center, Flex } from "@chakra-ui/react";

export const Rating = ({ stars }) => {
  let starpattern = Array.from({ length: 5 }, (el, ind) => {
    // console.log(ind)
    let half = ind + 0.5;
    // console.log(stars)
    return (
      <span key={ind} >
        {
        stars >= ind + 1 ? (
          <FaStar style={{color:"#277E1F"}} />
        ) : stars >= half ? (
          <FaStarHalfAlt style={{color:"#277E1F"}}  />
        ) : (
          <AiOutlineStar style={{color:"#277E1F"}}  />
        )}
      </span>
    );
  });

  return (
    <Flex alignItems='center'>
      <Flex> {starpattern}</Flex>
      <h2>({stars})</h2>
    </Flex>
  );
};