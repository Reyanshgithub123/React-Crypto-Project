import {
    Box,

    Flex,

    Icon,
 
    Stack,
    Text,

  } from "@chakra-ui/react";
  import React from "react";
  const SupportCard = ({ leftComponent, icon, title, text }) => {
    return (
      <Flex
        gap={10}
        justify="space-between"
     
      >
        <Stack maxW="24rem">
          <Icon as={icon} boxSize={6} color="p.purple" />
          <Text fontWeight="medium" as="h1" textStyle="h1">
            {title}
          </Text>
          <Text fontSize="sm" color="black.60">
            {text}
          </Text>
        </Stack>
        <Box maxW="550px" w="full">
          {leftComponent}
        </Box>
      </Flex>
    );
  };
  
  export default SupportCard;