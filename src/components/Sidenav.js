import { Box, Heading, HStack, Stack,Text  } from '@chakra-ui/react';
import React from 'react'
import { Link, useLocation } from "react-router-dom";
const Sidenav = () => {
    const location=useLocation()
    console.log(location)
    console.log(location.pathname)

    const navLinks = [
        {
         
          text: "Dashboard",
          link: "/",
        },
        {
         
          text: "Transactions",
          link: "/transactions",
        },
      ];
  return (
    
       <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
         CRYPTO
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack 
                
                borderRadius="10px"
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                color="#797E82"
              >
                
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
           
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
          >
          
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav
